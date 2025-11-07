import Reveal from "@/components/Reveal";
import { getTranslations } from "next-intl/server";
import BookCard from "../books-components/BookCard";

export default async function BooksPage() {
  const t = await getTranslations();

  return (
    <main className="flex justify-center p-4 sm:p-8">
      <article className="mt-[30px] flex w-full flex-col items-center gap-8 sm:w-[90%] sm:gap-12 lg:w-4/5">
        <Reveal>
          <header>
            <h1 className="text-gradient text-center text-5xl leading-normal font-bold md:text-7xl">
              {t("books.title")}
            </h1>
            <p className="body-font mx-auto max-w-4xl px-4 text-center">
              {t("books.description")}
            </p>
          </header>

          <section
            className="flex w-full flex-col gap-8 sm:gap-12"
            aria-label="Magazines et livres"
          >
            {/* Civilisation Book */}
            <BookCard
              title={t("books.civilisation.title")}
              description={t("books.civilisation.description")}
              coverImage="/images/Couvertures magazines/Civilisation Mag.jpg"
              galleryLink="/books/civilisation"
              reverseLayout={true}
              hasFilmLink={true}
              filmLink="https://www.youtube.com/watch?v=Q-gz6qA1h14"
            />

            {/* Wizzy en Asie Book */}
            <BookCard
              title={t("books.wizzy.title")}
              description={t("books.wizzy.description")}
              coverImage="/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg"
              galleryLink="/books/wizzyenasie"
              reverseLayout={false}
            />
          </section>
        </Reveal>
      </article>
    </main>
  );
}
