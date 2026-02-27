import { projects } from "@/components/index.js";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const id = params?.id;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
    description: project.tagline || project.description,
    openGraph: {
      title: `${project.name} | Hemax Patel`,
      description: project.tagline || project.description,
      type: "website",
      images: project.images?.[0]
        ? [
            {
              url: project.images[0],
              width: 1200,
              height: 630,
              alt: project.name,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Hemax Patel`,
      description: project.tagline || project.description,
      images: project.images?.[0] ? [project.images[0]] : [],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}
