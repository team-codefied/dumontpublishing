import { PageMotion } from "@/components/layout/PageMotion";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageMotion>{children}</PageMotion>;
}
