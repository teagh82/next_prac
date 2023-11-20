import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// CSS 적용
import styles from '@/app/ui/home.module.css';
// 폰트 바꿀 때 사용
import { lusitana } from '@/app/ui/fonts';
// 이미지 넣을 때 사용
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        
        {/* 테일윈드로 적은 검정색 삼각형 */}
        {/*<div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/>*/}
        {/* 테일윈드 대신에 직접 만든 css 파일 이용 */}
        <div className={styles.shape}></div>

          {/* <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}> */}
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal white-space-pre-line`}>
            <strong>연습중</strong> 하이루 방가방가 이건 루시타나폰트{' '}
            <a href="https://github.com/teagh82/meetion/tree/master" className="text-pink-500">
              나는 기현
            </a>
            , brought to you by Vercel.
          </p>

          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>연습중</strong> 하이루 방가방가 이건 기본 글꼴{' '}
            <a href="https://nextjs.org/learn/" className="text-pink-500">
              나는 기현
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-purple-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* md 이상일 때 block 이니까 화면 줄이면 없어짐 */}
          <Image
            src="/나.jpg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          {/* md 이상일 때 hidden 이니까 창 크기 줄여야만 대머리 보여짐 */}
          <Image
            src="/bald_me.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
