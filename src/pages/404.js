import React from "react";
import Link from "@docusaurus/Link";

export default function NotFound() {
  return (
    <main className="aegisora-404">
      <div className="aegisora-404-card">
        <div className="aegisora-404-code">404</div>
        <h1>Governance boundary not found.</h1>
        <p>
          This documentation path does not exist. Return to the documentation
          home and continue from a known route.
        </p>
        <Link className="button button--primary button--lg" to="/">
          Back to Aegisora Docs
        </Link>
      </div>
    </main>
  );
}