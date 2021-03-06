import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { SearchResults } from '../components/SearchResults';
import styles from '../styles/Home.module.css'

interface Results {
  totalPrice: number;
  data: any[];
}

export default function Home() {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  const formatter = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const totalPrice = data.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    const formattedData = data.map(item => {
      return {
        ...item,
        formattedPrice: formatter.format(item.price)
      }
    })

    setResults({
      totalPrice,
      data: formattedData
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Performance APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          search box
        </h1>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button>search</button>
        </form>

        <SearchResults
          results={results.data}
          totalPrice={results.totalPrice}
        />

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
