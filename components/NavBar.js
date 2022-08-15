import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
    const router = useRouter();

    return <nav>
        <Link href="/">
          <a className={router.pathname === '/' ? 'active' : ''}>HOME</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === '/about' ? 'active' : ''}>ABOUT</a>
        </Link>
        <style jsx>{`
          a {
            text-decortion: none;
          }
          .active {
            color: tomato;
          }
        `}</style>
    </nav>;
};