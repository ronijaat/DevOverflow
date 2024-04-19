import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import { Button } from '../ui/button';

interface Params {
  job_title: string;
  job_apply_link: string;
  job_description: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_employment_type: string;
  employer_logo: string;
}

const JobCard = ({
  job_title,
  job_apply_link,
  job_description,
  job_city,
  job_state,
  job_country,
  job_employment_type,
  employer_logo,
}: Params) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11 shadow-xl z-1">
      <div className="flex flex-row justify-start items-start gap-3">
        <div className="mall-medium text-dark200_light900 rounded-xl min-w-14 min-h-14 flex justify-center items-center">
          <Image
            src={employer_logo}
            alt="Employer Logo"
            width={40}
            height={40}
            className=""
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-2">
          <div>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1">
              {job_title}
            </h3>
          </div>
          <div>
            <p className="text-dark200_light900 line-clamp-1 font-light rounded-xl dark:bg-slate-600 p-1">
              {job_city ? job_city + ' ,' : ''}
              {job_state ? job_state + ' ,' : ''}
              {job_country ? job_country : ''}
            </p>
          </div>
          <div>
            <p className="text-dark400_light900 line-clamp-2 font-light">
              {job_description}
            </p>
          </div>
          <div className="flex-between mt-6 w-full flex-wrap gap-3">
            <div className="flex flex-row gap-4">
              <div className="text-dark100_light800 line-clamp-1 font-light font-mono flex flex-row gap-1 opacity-60 dark:text-slate-400">
                <Image
                  src={`/assets/icons/clock.svg`}
                  alt="Clock Icon"
                  width={24}
                  height={24}
                />
                {job_employment_type}
              </div>
              <div className="text-dark100_light800 line-clamp-1 flex flex-row gap-1 opacity-60 dark:text-slate-400">
                <Image
                  src={`/assets/icons/currency-dollar-circle.svg`}
                  alt="Clock Icon"
                  width={24}
                  height={24}
                />
                Not disclosed
              </div>
            </div>
            <div>
              <Link href={job_apply_link} target="_blank">
                <Button>
                  <div className="flex flex-row items-center justify-center gap-1 text-primary-500 bg-slate-100 p-3 rounded-xl  dark:bg-primary-500 dark:text-primary-100">
                    <h3>View Job</h3>
                    <div className="font-large">
                      <GoArrowUpRight />
                    </div>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
