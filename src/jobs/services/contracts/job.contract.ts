export interface FindJobsServiceContractRequest {
  query: string;
  page?: number;
  numPages?: number;
  datePosted?: 'all' | 'today' | '3days' | 'week' | 'month';
  remoteJobsOnly?: boolean;
  employmentRequirements?: 'FULLTIME' | 'CONTRACTOR' | 'PARTTIME' | 'INTERN';
  jobRequirements?:
    | 'under3yearsExperience'
    | 'moreThan3yearsExperience'
    | 'noExperience'
    | 'noDegree';
  jobTitles?: string;
  country?: string;
  language?: string;
}

export interface FindJobsServiceContractResponse {
  employerName: string;
  employerLogo: string;
  employerWebsite: any;
  employerCompanyType: any;
  jobPublisher: string;
  jobId: string;
  jobEmploymentType: string;
  jobTitle: string;
  jobApplyLink: string;
  jobApplyIsDirect: boolean;
  jobApplyQualityScore: number;
  jobDescription: string;
  jobIsRemote: boolean;
  jobPostedAtTimestamp: number;
  jobPostedAtDatetimeUtc: string;
  jobCity: string;
  jobState: string;
  jobCountry: string;
  jobLatitude: number;
  jobLongitude: number;
  jobBenefits: Array<string>;
  jobGoogleLink: string;
  jobOfferExpirationDatetimeUtc: any;
  jobOfferExpirationTimestamp: any;
  jobRequiredExperience: {
    noExperienceRequired: boolean;
    requiredExperienceInMonths: any;
    experienceMentioned: boolean;
    experiencePreferred: boolean;
  };
  jobRequiredSkills: any;
  jobRequiredEducation: {
    postgraduateDegree: boolean;
    professionalCertification: boolean;
    highSchool: boolean;
    associatesDegree: boolean;
    bachelorsDegree: boolean;
    degreeMentioned: boolean;
    degreePreferred: boolean;
    professionalCertificationMentioned: boolean;
  };
  jobExperienceInPlaceOfEducation: boolean;
  jobMinSalary: number;
  jobMaxSalary: number;
  jobSalaryCurrency: string;
  jobSalaryPeriod: string;
  jobHighlights: Array<{ [key: string]: Array<string> }>;
  jobJobTitle: string;
  jobPostingLanguage: string;
  jobOnetSoc: string;
  jobOnetJobZone: string;
}
