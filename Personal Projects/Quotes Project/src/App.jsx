import React from 'react'
import Quotes from '../components/quotes'

const App = () => {
  const animatedQuotes = [
    {
      quote: "Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it.",
      character: "Rafiki",
      movie: "The Lion King",
      image:
        "https://jimshoredesigns.co.uk/cdn/shop/files/6000962_39a6dd9c-8eeb-490a-aaea-177364f9c1e7.jpg?v=1747990470",
    },

    {
      quote: "To infinity and beyond!",
      character: "Buzz Lightyear",
      movie: "Toy Story",
      image:
        "https://wallpapers.com/images/hd/buzz-lightyear-on-flight-ky8m7imcxdztmi7s.jpg",
    },

    {
      quote: "Just keep swimming.",
      character: "Dory",
      movie: "Finding Nemo",
      image:
        "https://wallpapers.com/images/hd/finding-dory-in-crystal-blue-background-aa613uektriq5ea6.jpg",
    },

    {
      quote: "Adventure is out there!",
      character: "Ellie",
      movie: "Up",
      image:
        "https://i.pinimg.com/474x/1b/13/77/1b1377de6d9cb4bb69a0047713fb65bd.jpg",
    },

    {
      quote: "Some people are worth melting for.",
      character: "Olaf",
      movie: "Frozen",
      image:
        "https://cdn.fondecranvip.com/2025/09/yAYoyXOn-fond-decran-Olaf-27.webp",
    },

    {
      quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
      character: "The Emperor",
      movie: "Mulan",
      image:
        "https://p7.hiclipart.com/preview/570/909/305/fa-mulan-the-emperor-of-china-li-shang-mulan.jpg",
    },

    {
      quote: "Take her to the moon for me.",
      character: "Bing Bong",
      movie: "Inside Out",
      image:
        "https://d23.com/app/uploads/2024/01/04-012824CT2MB-0110.jpg",
    },

    {
      quote: "You are braver than you believe, stronger than you seem, and smarter than you think.",
      character: "Christopher Robin",
      movie: "Winnie the Pooh",
      image:
        "https://i.pinimg.com/736x/55/12/84/551284403e05c86ef45227a2a2eac2b1.jpg",
    },

    {
      quote: "When life gets you down, do you wanna know what you've gotta do? Just keep swimming.",
      character: "Dory",
      movie: "Finding Nemo",
      image:
        "https://wallpapers.com/images/hd/finding-dory-in-crystal-blue-background-aa613uektriq5ea6.jpg",
    },

    {
      quote: "Our fate lives within us. You only have to be brave enough to see it.",
      character: "Merida",
      movie: "Brave",
      image:
        "https://imgix.bustle.com/rehost/2016/9/13/9cc6001f-4571-4425-ba33-2834762f4c34.jpg?w=1200&h=1200&fit=crop&crop=faces&fm=jpg",
    },
  ];

  return (
    <div>
      <div className="parent">
        {animatedQuotes.map(function (elem) {
          return <Quotes key={elem.character} quote={elem.quote} character={elem.character} movie={elem.movie} image={elem.image} />
        })}
      </div>
    </div>
  )
}

export default App
