import { redirect } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { canManageNews, getCurrentUser } from "@/lib/auth";
import { getNews } from "@/lib/news-store";
import NewsManager from "./NewsManager";

export default async function AdminNoticiasPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (!canManageNews(user)) {
    redirect("/admin");
  }

  const news = await getNews();

  return (
    <>
      <Header />
      <NewsManager initialNews={news} user={user} />
      <Footer />
    </>
  );
}
