import { response } from "express"
import { ENV } from "./env";

const users = [
  {
    userName: 'Allison Frederick',
    userAddress: 'allison@distra.social',
  },
  {
    userName: 'Andy Damico',
    userAddress: 'andy@distra.social',
  },
  {
    userName: 'Blanca Ravine',
    userAddress: 'blanca@distra.social',
  },
  {
    userName: 'Madison T.',
    userAddress: 'mads22@distra.social',
  },
  {
    userName: 'Ryan ♋️',
    userAddress: 'ryan231@distra.social',
  },
  {
    userName: 'Market Place',
    userAddress: 'marketplace-official@distra.social',
  }
]

const emojis = ['🤨', '😂', '👍', '❤️', '✅', '😭']

export const examplePost = {
    userName: users[Math.floor(Math.random() * 6)].userName,
    userAddress: users[Math.floor(Math.random() * 6)].userAddress,
    mediaText: "This is a test post.",
    createdAt: new Date(),
    updatedAt: new Date(),
    reactions: [
      { emoji: emojis[Math.floor(Math.random() * 6)], count: Math.floor(Math.random() * 300) },
      { emoji: emojis[Math.floor(Math.random() * 6)], count: Math.floor(Math.random() * 300) },
      { emoji: emojis[Math.floor(Math.random() * 6)], count: Math.floor(Math.random() * 300) }
    ]
}

const generatePosts = (numToGenerate: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      fetch('https://api.api-ninjas.com/v1/dadjokes?limit=' + numToGenerate, {
        headers: {
          'X-Api-Key': ENV.NINJA_API_KEY || ''
        }
      })
        .then(response => {
          return response.json()
        })
        .then(json => {
          let postArray: any = []

          json.forEach((post: any) => {
            postArray.push({
              userName: users[Math.floor(Math.random() * 6)].userName,
              userAddress: users[Math.floor(Math.random() * 6)].userAddress,
              mediaText: post.joke,
              createdAt: new Date(),
              updatedAt: new Date(Math.abs(Number(Number(new Date()) - Math.random()*(1e+9)))),
              reactions: [
                { emoji: emojis[Math.floor(Math.random() * 6)], count: Math.floor(Math.random() * 300) },
                { emoji: emojis[Math.floor(Math.random() * 6)], count: Math.floor(Math.random() * 300) },
                { emoji: emojis[Math.floor(Math.random() * 6)], count: Math.floor(Math.random() * 300) }
              ]
            })
          });

          resolve(postArray)
        })
        .catch(error => {
          reject(error)
        })

    }, 500)
  })
}

export default generatePosts;