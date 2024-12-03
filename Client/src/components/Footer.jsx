import React from "react";

const footer_data = ["FAQ", "Help Center", "Account", "Media Center", "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us", "Speed Test", "Legal Notics", "Only on Netflix"]

const Footer = () => {
  return (
    <footer className="flex justify-center pb-20">

    <div className="flex flex-col w-5/6">
      <p className="py-10">Questions? Call <span className="underline cursor-pointer">000-800-919-1694</span></p>
      <div className="sm:grid-cols-2 sm:grid md:grid-cols-3 md:grid lg:grid lg:grid-cols-4 gap-2 pb-12">
        {
          footer_data.map((data, i) => {
            return (
              <ul key={i}>
                <a className="underline cursor-pointer text-sm w-fit-content">{data}</a>
              </ul>
            )
          })
        }
      </div>
      <div className="pb-10">
        <select className="rounded-full px-4 py-1 border border-slate-700 border-2 font-semibold bg-bgBlack">
          <option value="English">English</option>
          <option value="Global">Global</option>
        </select>
        </div>
      <div className="text-sm pb-10">IAStream Global</div>
    </div>

    </footer>
  )
}

export default Footer;