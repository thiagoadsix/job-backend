export interface SearchApiContractRequest {
  query: string;
  page?: number;
  num_pages?: number;
  date_posted?: 'all' | 'today' | '3days' | 'week' | 'month';
  remote_jobs_only?: boolean;
  employment_requirements?: 'FULLTIME' | 'CONTRACTOR' | 'PARTTIME' | 'INTERN';
  job_requirements?:
    | 'under3yearsExperience'
    | 'moreThan3yearsExperience'
    | 'noExperience'
    | 'noDegree';
  job_titles?: string;
  country?: string;
  language?: string;
}

export interface SearchApiContractResponse {
  status: string;
  request_id: string;
  parameters: any;
  data: Array<{
    employer_name: string;
    employer_logo: string;
    employer_website: any;
    employer_company_type: any;
    job_publisher: string;
    job_id: string;
    job_employment_type: string;
    job_title: string;
    job_apply_link: string;
    job_apply_is_direct: boolean;
    job_apply_quality_score: number;
    job_description: string;
    job_is_remote: boolean;
    job_posted_at_timestamp: number;
    job_posted_at_datetime_utc: string;
    job_city: string;
    job_state: string;
    job_country: string;
    job_latitude: number;
    job_longitude: number;
    job_benefits: Array<string>;
    job_google_link: string;
    job_offer_expiration_datetime_utc: any;
    job_offer_expiration_timestamp: any;
    job_required_experience: {
      no_experience_required: boolean;
      required_experience_in_months: any;
      experience_mentioned: boolean;
      experience_preferred: boolean;
    };
    job_required_skills: any;
    job_required_education: {
      postgraduate_degree: boolean;
      professional_certification: boolean;
      high_school: boolean;
      associates_degree: boolean;
      bachelors_degree: boolean;
      degree_mentioned: boolean;
      degree_preferred: boolean;
      professional_certification_mentioned: boolean;
    };
    job_experience_in_place_of_education: boolean;
    job_min_salary: number;
    job_max_salary: number;
    job_salary_currency: string;
    job_salary_period: string;
    job_highlights: Array<{ [key: string]: Array<string> }>;
    job_job_title: string;
    job_posting_language: string;
    job_onet_soc: string;
    job_onet_job_zone: string;
  }>;
}

export interface JobDetailsApiContractResponse {
  status: string;
  request_id: string;
  parameters: any;
  data: Array<{
    employer_name: string;
    employer_logo: string;
    employer_website: any;
    employer_company_type: any;
    job_publisher: string;
    job_id: string;
    job_employment_type: string;
    job_title: string;
    job_apply_link: string;
    job_apply_is_direct: boolean;
    job_apply_quality_score: number;
    job_description: string;
    job_is_remote: boolean;
    job_posted_at_timestamp: number;
    job_posted_at_datetime_utc: string;
    job_city: string;
    job_state: string;
    job_country: string;
    job_latitude: number;
    job_longitude: number;
    job_benefits: Array<string>;
    job_google_link: string;
    job_offer_expiration_datetime_utc: any;
    job_offer_expiration_timestamp: any;
    job_required_experience: {
      no_experience_required: boolean;
      required_experience_in_months: any;
      experience_mentioned: boolean;
      experience_preferred: boolean;
    };
    job_required_skills: any;
    job_required_education: {
      postgraduate_degree: boolean;
      professional_certification: boolean;
      high_school: boolean;
      associates_degree: boolean;
      bachelors_degree: boolean;
      degree_mentioned: boolean;
      degree_preferred: boolean;
      professional_certification_mentioned: boolean;
    };
    job_experience_in_place_of_education: boolean;
    job_min_salary: number;
    job_max_salary: number;
    job_salary_currency: string;
    job_salary_period: string;
    job_highlights: Array<{ [key: string]: Array<string> }>;
    job_job_title: string;
    job_posting_language: string;
    job_onet_soc: string;
    job_onet_job_zone: string;
    job_occupational_categories?: Array<string>;
    job_publisher_website?: string;
    job_publisher_favicon?: string;
    estimated_salaries?: Array<{
      location: string;
      job_title: string;
      publisher_name: string;
      publisher_link: string;
      min_salary: number;
      max_salary: number;
      median_salary: number;
      salary_period: string;
      salary_currency: string;
    }>;
    apply_options?: Array<{
      publisher: string;
      apply_link: string;
      is_direct: boolean;
    }>;
    employer_reviews?: Array<any>;
  }>;
}
