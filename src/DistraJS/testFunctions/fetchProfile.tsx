import { Profile } from '../../types'
import { testProfiles } from './testData'
//Simulate fetchFeed function for local testing
export const fetchProfile = (userAddress: string) => {
  console.log('SIMULATING fetchProfile')
  return new Promise((resolve, reject) => {
    //Randomly throw a failure
    const isFailure = (Math.random() * 4) > 4;
    if (isFailure) { reject({ userMessage: 'Failed to get profile', errorCode: '500', errorMessage: 'SimulatedError' }) }
    else {
      setTimeout(() => {

        let fetchedProfile:Profile = {
          userName: 'undefined',
          userAddress: 'undefined',
          userPicture: '',
          userBackground: '',
          createdAt: new Date(),
          updatedAt: new Date(),
          birthday: new Date()
        }

        testProfiles.find((profile, index) => {
          if (profile.userAddress == userAddress) {
            fetchedProfile = profile
            return true
          }
        })

        if (fetchedProfile.userAddress == 'undefined') {
          reject({ userMessage: 'Profile does not exist', errorCode: '404', errorMessage: 'SimulatedError' })
        }

        resolve(fetchedProfile)
      }, 500)
    }

  })
}

