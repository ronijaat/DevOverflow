'use server';

import axios from 'axios';
import { GetJobsParams } from './shared.types';

export async function getJobs(params: GetJobsParams) {
  const { page, pageSize = 10, filter, searchQuery } = params;
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: `${searchQuery || ''} job in ${filter || ''}`,
      page: page?.toString() || '1',
      num_pages: '1',
    },
    headers: {
      'X-RapidAPI-Key': (process.env.RAPID_API_KEY as string) || '',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    // console.log(response.data.data);
    if (response.data.data && response.data.data.length > 0) {
      if (response.data.data.length < pageSize) {
        return { jobs: response.data.data, isNext: false };
      } else {
        return { jobs: response.data.data, isNext: true };
      }
    }
  } catch (e) {
    console.log(e);
  }
}
