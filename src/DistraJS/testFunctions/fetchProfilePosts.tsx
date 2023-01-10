import { Post } from '../../types'
import { testPosts } from './testData'
//Simulate fetchFeed function for local testing
export const fetchProfilePosts = (userAddress: string) => {
  console.log('SIMULATING fetchProfilePosts')
  return new Promise((resolve, reject) => {
    //Randomly throw a failure
    const isFailure = (Math.random() * 4) > 4;
    if (isFailure) { reject({userMessage: 'Failed to get posts', errorCode: '500', errorMessage: 'SimulatedError'}) }
    else {

      setTimeout(() => {
        let postArray: Post[] = []

        testPosts.find((post, index) => {
          if (post.userAddress == userAddress) {
            postArray.push(post)
          }
        })

        resolve(postArray)
      }, 500)
    }

  })
}

