import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Counter from "../_components/Counter";

import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;
// export const revalidate = 15;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">Наші номери</h1>
      <p className="text-primary-200 text-lg mb-10">
        Затишний готель у самому серці Києва, де кожен номер оформлений у стилі
        різних міст України. Відчуйте чарівність Львова, розкіш Києва, спокій
        Вінниці чи енергію Одеси, не залишаючи столиці. У кожному номері
        поєднано унікальний колорит міста з сучасним комфортом та всіма
        зручностями. Прокидайтеся з видом на мальовничі краєвиди столиці та
        насолоджуйтесь атмосферою української гостинності. Ідеальне місце для
        тих, хто хоче відкрити для себе Україну з нової сторони. Ласкаво просимо
        до вашого затишного дому в центрі Києва!
      </p>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
