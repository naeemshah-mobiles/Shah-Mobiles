import { Link } from "wouter";
import { Layout } from "@/components/layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center py-32 px-4 text-center">
        <h1 className="font-display text-8xl font-black text-primary/20 mb-4">404</h1>
        <h2 className="font-display text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <Link href="/" className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
          Return to Store
        </Link>
      </div>
    </Layout>
  );
}
