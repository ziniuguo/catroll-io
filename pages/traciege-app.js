import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { useState } from 'react'

export default function TraciegeApp() {
  const [email, setEmail] = useState('example@email.com')
  const [name, setName] = useState('name.Team')
  const [platform, setPlatform] = useState('uplay')
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Traciege
          </h1>
        </div>
        <div className="container py-12">
          <label>
            <span className="text-lg">R6 Username: </span>
            <br />
            <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            <span className="text-lg">Email: </span>
            <br />
            <input
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <span className="text-lg">Platform: </span>
          <br />
          <label>
            <input
              type="radio"
              value="uplay"
              name="platform"
              id="uplay"
              checked={platform === 'uplay'}
              onChange={(e) => setPlatform(e.target.value)}
            />
            <span>uplay </span>
          </label>
          <label>
            <input
              type="radio"
              value="psn"
              name="platform"
              id="psn"
              checked={platform === 'psn'}
              onChange={(e) => setPlatform(e.target.value)}
            />
            <span>ps4 </span>
          </label>
          <label>
            <input
              type="radio"
              value="xbl"
              name="platform"
              id="xbl"
              checked={platform === 'xbl'}
              onChange={(e) => setPlatform(e.target.value)}
            />
            <span>xbox </span>
          </label>
          <br />
          <br />
          <button
            onClick={async function () {
              const res = await fetch(
                'http://143.198.210.184:8964/register?name=' +
                  name +
                  '&email=' +
                  email +
                  '&platform=' +
                  platform
              )
              console.log(res)
              if (res.status === 201) {
                alert('You have subscribed! ' + email + ', ' + name + ', ' + platform)
              } else if (res.status === 204) {
                alert('No such player exists')
              } else if (res.status === 500) {
                alert('Failed. Please try again later')
              } else if (res.status === 422) {
                alert('Failed to find your email address')
              }
            }}
            className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
          >
            subscribe
          </button>
        </div>
      </div>
    </>
  )
}
