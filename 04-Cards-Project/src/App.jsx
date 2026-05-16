import React from 'react'
import Card from './components/card'
// import User from './components/User'

const App = () => {

  const jobOpenings = [
    {
      brandlogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      posted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$85/hr",
      location: "Mountain View, USA",
    },

    {
      brandlogo:
        "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small/amazon-logo-amazon-icon-transparent-free-png.png",
      company: "Amazon",
      posted: "2 weeks ago",
      post: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Seattle, USA",
    },

    {
      brandlogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTWlnJCnn2ljYqv2t4XY9bM5U4pnohvXZRw&s",
      company: "Microsoft",
      posted: "3 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$95/hr",
      location: "Redmond, USA",
    },

    {
      brandlogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      company: "Netflix",
      posted: "1 week ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$140/hr",
      location: "Los Angeles, USA",
    },

    {
      brandlogo:
        "https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg",
      company: "Apple",
      posted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$130/hr",
      location: "Cupertino, USA",
    },

    {
      brandlogo:
        "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
      company: "Tesla",
      posted: "6 days ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$150/hr",
      location: "Austin, USA",
    },

    {
      brandlogo:
        "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
      company: "Meta",
      posted: "4 weeks ago",
      post: "Backend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$90/hr",
      location: "Menlo Park, USA",
    },

    {
      brandlogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      company: "IBM",
      posted: "8 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "New York, USA",
    },

    {
      brandlogo:
        "https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG8.png",
      company: "Samsung",
      posted: "2 days ago",
      post: "Mobile App Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$88/hr",
      location: "Seoul, South Korea",
    },

    {
      brandlogo:
        "https://img.favpng.com/3/3/19/oracle-corporation-logo-computer-software-business-png-favpng-w8J8hB6h7BC6JdpaW0wwBZsQx.jpg",
      company: "Oracle",
      posted: "3 weeks ago",
      post: "DevOps Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$125/hr",
      location: "Austin, USA",
    },
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem) {
        return <Card company={elem.company} brandlogo={elem.brandlogo} posted={elem.posted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      })}
    </div>
  )
}

export default App
