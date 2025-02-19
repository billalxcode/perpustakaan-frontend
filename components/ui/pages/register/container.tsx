import RegisterForm from "./form";

export default function RegisterContainer() {
  return (
    <div className="p-4 flex flex-row gap-4 w-full min-h-screen justify-center items-center">
      <div className="w-[640px] bg-card p-4 rounded-xl">
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="text-2xl font-bold">Register</h1>
          <p>Input your data to register</p>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
}
