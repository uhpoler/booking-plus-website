function LoginMessage() {
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        Будь ласка,{" "}
        <a href="/login" className="underline text-accent-500">
          увійдіть
        </a>{" "}
        щоб забронювати
        <br /> цей номер зараз
      </p>
    </div>
  );
}

export default LoginMessage;
