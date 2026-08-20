import { siteConfig } from "../config";

export interface Paper {
  title: string;
  authors: string;
  conference: string;
  conferenceSurname?: string;
  year: string;
  citations?: number;
  arxivId?: string;
  doi?: string;
  link?: string;
  abstract?: string;
  tags?: string[];
}

/**
 * Extracts arXiv ID from paper link or explicit field
 */
function extractArxivId(paper: Paper): string | null {
  if (paper.arxivId) return paper.arxivId.trim();
  if (paper.link && paper.link.includes("arxiv.org")) {
    const match = paper.link.match(/arxiv\.org\/(?:abs|pdf)\/([0-9]+\.[0-9]+)/i);
    if (match && match[1]) return match[1];
  }
  return null;
}

/**
 * Extracts DOI from paper
 */
function extractDoi(paper: Paper): string | null {
  if (paper.doi) return paper.doi.replace(/^https?:\/\/doi\.org\//i, "").trim();
  if (paper.link && paper.link.includes("doi.org")) {
    const match = paper.link.match(/doi\.org\/(10\.[0-9]+\/[^\s/]+)/i);
    if (match && match[1]) return match[1];
  }
  return null;
}

/**
 * Attempts to fetch citation count from Semantic Scholar API
 */
async function fetchSemanticScholar(identifier: string): Promise<number | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const url = `https://api.semanticscholar.org/graph/v1/paper/${encodeURIComponent(identifier)}?fields=citationCount`;
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "AstroPortfolio/1.0" },
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (typeof data.citationCount === "number") {
        return data.citationCount;
      }
    }
  } catch {
    // Network or rate limit fallback
  }
  return null;
}

/**
 * Attempts to fetch citation count from OpenAlex API (Free & reliable academic index)
 */
async function fetchOpenAlex(paper: Paper, doi: string | null): Promise<number | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    let url = "";
    if (doi) {
      url = `https://api.openalex.org/works/https://doi.org/${encodeURIComponent(doi)}`;
    } else {
      url = `https://api.openalex.org/works?filter=title.search:${encodeURIComponent(paper.title)}&per-page=1`;
    }

    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "mailto:julien.merand@cea.fr" },
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (doi && typeof data.cited_by_count === "number") {
        return data.cited_by_count;
      } else if (data.results && data.results.length > 0 && typeof data.results[0].cited_by_count === "number") {
        return data.results[0].cited_by_count;
      }
    }
  } catch {
    // Fallback silently
  }
  return null;
}

/**
 * Resolves citation count for a single paper with fallback chain:
 * 1. Semantic Scholar (by arXiv ID or DOI)
 * 2. OpenAlex (by DOI or Title)
 * 3. Fallback to manual citations in config.ts
 */
export async function getPaperCitations(paper: Paper): Promise<number> {
  const manualCitations = paper.citations ?? 0;
  const arxivId = extractArxivId(paper);
  const doi = extractDoi(paper);

  // 1. Try Semantic Scholar
  if (arxivId) {
    const count = await fetchSemanticScholar(`ARXIV:${arxivId}`);
    if (count !== null) return Math.max(count, manualCitations);
  }
  if (doi) {
    const count = await fetchSemanticScholar(`DOI:${doi}`);
    if (count !== null) return Math.max(count, manualCitations);
  }

  // 2. Try OpenAlex API
  const openAlexCount = await fetchOpenAlex(paper, doi);
  if (openAlexCount !== null) {
    return Math.max(openAlexCount, manualCitations);
  }

  // 3. Fallback to config value
  return manualCitations;
}

/**
 * Returns all papers with dynamically resolved citations
 */
export async function getPapersWithCitations(): Promise<Paper[]> {
  if (!siteConfig.papers || siteConfig.papers.length === 0) {
    return [];
  }

  const papersWithCitations = await Promise.all(
    siteConfig.papers.map(async (paper) => {
      const citations = await getPaperCitations(paper);
      return {
        ...paper,
        citations,
      };
    })
  );

  return papersWithCitations;
}
