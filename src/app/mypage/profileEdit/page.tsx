import Header from '@/components/Header'

const Page = () => {
  return (
    <div className="min-h-dvh">
      <Header title="프로필 수정" leftButton={<Header.BackButton />} />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet
        atque consectetur culpa, doloribus earum eius eos eum fuga fugiat harum
        ipsam laborum omnis quae sint tenetur totam ut voluptates.
      </div>
    </div>
  )
}

export default Page
