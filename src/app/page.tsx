import Image from "next/image";

export default function Home() {
  return (
    <main className="about flex min-h-screen flex-col p-10">
      <Image
        src="/next_logo_lg_v2.png"
        alt="large image"
        className="hidden md:block"
        width={800}
        height={102}
      />
      <Image
        src="/next_logo_sm.png"
        alt="small image"
        className="md:hidden"
        width={570}
        height={102}
      />
      <span className="text-2xl font-bold pt-5">My next todo app...</span>
      <p className="pt-5">
        This is a small todo aplication used as excuse to learn and practice Next.js.
        Is using the version 14.0.1 and you can download it and run it in your local
        from this repository .....
      </p>
      <p className="pt-5">
        This is also a resource taken for providing examples for this blog article...
        Is not going to
        be a tutorial for the app, because this article covers more than what is
        required for that project and it could be more valuable if you have all
        those concepts at your service and can use the todo app just as a use
        case to be able to see how you can use them together for getting a
        particular goal and then start to experiment by yourself.
      </p>
    </main>
  );
}
