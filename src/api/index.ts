import axios, { AxiosError } from 'axios'
import { APIResponse, GitHubUser, } from '../types'

const successResponse = <ResponseData, Error>(data: ResponseData): APIResponse<ResponseData, Error> => ({
  result: 'success',
  data,
})

const errorResponse = <ResponseData, Error>(message: Error): APIResponse<ResponseData, Error> => ({
  result: 'error',
  message,
})

const URLs = {
  github_users: process.env.GITHUB_USERS_API,
}

const getGitHubAccessToken = async (code: string) => {
  // I will write this code later when I have builded the API ...
}

const getGitHubUsersByUsername = async (username: string): Promise<APIResponse<GitHubUser, string>> => {
  try {
    const request = await axios.get(`${URLs.github_users}/${username}`)
    return successResponse(request.data)
  } catch (error) {
    if (error instanceof AxiosError) {
      return errorResponse(error.response?.data?.message)
    }

    if (error instanceof Error) {
      return errorResponse(error.message)
    }
    
    return errorResponse('Something error...')
  }
}

export default {
  getGitHubAccessToken,
  getGitHubUsersByUsername,
}