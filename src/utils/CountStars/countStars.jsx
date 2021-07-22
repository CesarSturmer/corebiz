export default function CountStars({ value }) {
  switch (value) {
    case 1:
      return (
        <>
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starEmpty.svg" alt="estrelas do produtos" />
          <img src="/starEmpty.svg" alt="estrelas do produtos" />
          <img src="/starEmpty.svg" alt="estrelas do produtos" />
          <img src="/starEmpty.svg" alt="estrelas do produtos" />
        </>
      )

    case 2:
      return (
        <>
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starEmpty.svg" alt="estrelas do produtos" />
          <img src="/starEmpty.svg" alt="estrelas do produtos" />
          <img src="/starEmpty.svg" alt="estrelas do produtos" />
        </>
      )

    case 3:
      return (
        <>
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starEmpty.svg" alt="estrelas do produtos" />
          <img src="/starEmpty.svg" alt="estrelas do produtos" />
        </>
      )

    case 4:
      return (
        <>
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starEmpty.svg" alt="estrelas do produtos" />
        </>
      )

    case 5:
      return (
        <>
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starFull.svg" alt="estrelas do produtos" />
          <img src="/starFull.svg" alt="estrelas do produtos" />
        </>
      )

    default:
      ;<>
        <img src="/starEmpty.svg" alt="estrelas do produtos" />
        <img src="/starEmpty.svg" alt="estrelas do produtos" />
        <img src="/starEmpty.svg" alt="estrelas do produtos" />
        <img src="/starEmpty.svg" alt="estrelas do produtos" />
        <img src="/starEmpty.svg" alt="estrelas do produtos" />
      </>
  }
}
