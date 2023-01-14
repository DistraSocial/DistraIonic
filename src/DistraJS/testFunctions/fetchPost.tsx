import { Post } from '../../types'
import { testPosts } from './testData'
//Simulate fetchPost function for local testing
export const fetchPost = (postAddress: string) => {
  console.log('SIMULATING fetchPost')
  return new Promise((resolve, reject) => {
    //Randomly throw a failure
    const isFailure = (Math.random() * 4) > 4;
    if (isFailure) { reject({ userMessage: 'Failed to get post', errorCode: '500', errorMessage: 'SimulatedError' }) }
    else {
      setTimeout(() => {
        let replyingTo:any = undefined
        let fullPost:any = undefined;
        testPosts.forEach((post, index) => {
          if (post.postAddress == postAddress) {
            if (post.replyTo?.postAddress) {replyingTo = post.replyTo?.postAddress}
            fullPost = {...post}
          }
          if (post.replyTo?.postAddress == postAddress) {
            let currentReplies = [];
            if (fullPost.replies) { currentReplies = fullPost.replies }
            currentReplies.push(post)
            fullPost.replies = [...currentReplies];
          }
          if (fullPost && fullPost.replyTo?.postAddress == post?.postAddress) {
            //This only works if we havent passed the original post
            fullPost.originalPost = post
          }
        })

        if(fullPost && (fullPost.replyTo?.postAddress && !fullPost.originalPost)) {
          //We need to search the front half again....
          testPosts.forEach((post, index) => {
            if (fullPost && fullPost.replyTo.postAddress == post.postAddress) {
              fullPost.originalPost = post
            }
          })
        }


        if (!fullPost) {reject({ userMessage: 'Failed to find post', errorCode: '404', errorMessage: 'SimulatedError' })}
        resolve(fullPost)
      }, 500)
    }

  })
}

