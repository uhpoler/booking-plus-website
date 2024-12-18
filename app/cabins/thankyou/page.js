export default function Page() {
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">Дякуємо за ваше бронювання!</h1>
      <a
        href="/account/reservations"
        className="underline text-xl text-accent-500 inline-block"
      >
        Перейти до ваших бронювань &rarr;
      </a>
    </div>
  );
}
