import KihyeonLogo from "@/app/ui/kihyeon-logo";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <KihyeonLogo />
      </div>

    <p className={`text-xl text-blue-800 md:text-3xl md:leading-normal font-semibold`}><strong>Blue Page</strong></p>
    </main>
    );
  }