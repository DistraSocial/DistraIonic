import { Post } from '../../types'
import { testPosts } from './testData'
//Simulate fetchFeed function for local testing
export const fetchFeed = (startPos: number) => {
  console.log('SIMULATING fetchFeed')
  return new Promise((resolve, reject) => {
    //Randomly throw a failure
    const isFailure = (Math.random() * 5) > 4;
    if (isFailure) { reject({userMessage: 'Failed to get posts', errorCode: '500', errorMessage: 'SimulatedError'}) }
    else {

      setTimeout(() => {
        let postArray: Post[] = []

        const postCap = startPos + 10;
        for (let i = startPos; i <= postCap; i++) {
          let newPost = {...testPosts[Math.floor(Math.random() * 4)]}
          newPost.postAddress = i + ''
          newPost.mediaText = newPost.mediaText + ' ' + i
          postArray.push(newPost)
        }
        resolve(postArray)
      }, 500)
    }

  })
}

