import {
  JobDetailsApiContractResponse,
  SearchApiContractResponse,
} from '../../apis/contracts';
import {
  FindJobsServiceContractResponse,
  GetJobByIdServiceContractResponse,
} from '../contracts';

export class JobMapper {
  static toFindJobs(
    job: SearchApiContractResponse,
  ): Array<FindJobsServiceContractResponse> {
    return job.data.map((data) => ({
      employerCompanyType: data.employer_company_type,
      employerLogo: data.employer_logo,
      employerName: data.employer_name,
      employerWebsite: data.employer_website,
      jobApplyIsDirect: data.job_apply_is_direct,
      jobApplyLink: data.job_apply_link,
      jobApplyQualityScore: data.job_apply_quality_score,
      jobBenefits: data.job_benefits,
      jobCity: data.job_city,
      jobCountry: data.job_country,
      jobDescription: data.job_description,
      jobEmploymentType: data.job_employment_type,
      jobExperienceInPlaceOfEducation:
        data.job_experience_in_place_of_education,
      jobGoogleLink: data.job_google_link,
      jobHighlights: data.job_highlights,
      jobId: data.job_id,
      jobIsRemote: data.job_is_remote,
      jobJobTitle: data.job_title,
      jobLatitude: data.job_latitude,
      jobLongitude: data.job_longitude,
      jobMaxSalary: data.job_max_salary,
      jobMinSalary: data.job_min_salary,
      jobOfferExpirationDatetimeUtc: data.job_offer_expiration_datetime_utc,
      jobOfferExpirationTimestamp: data.job_offer_expiration_timestamp,
      jobOnetJobZone: data.job_onet_job_zone,
      jobOnetSoc: data.job_onet_soc,
      jobPostedAtDatetimeUtc: data.job_posted_at_datetime_utc,
      jobPostedAtTimestamp: data.job_posted_at_timestamp,
      jobPostingLanguage: data.job_posting_language,
      jobPublisher: data.job_publisher,
      jobRequiredEducation: {
        associatesDegree: data.job_required_education.associates_degree,
        bachelorsDegree: data.job_required_education.bachelors_degree,
        degreeMentioned: data.job_required_education.degree_mentioned,
        degreePreferred: data.job_required_education.degree_preferred,
        highSchool: data.job_required_education.high_school,
        postgraduateDegree: data.job_required_education.postgraduate_degree,
        professionalCertification:
          data.job_required_education.professional_certification,
        professionalCertificationMentioned:
          data.job_required_education.professional_certification_mentioned,
      },
      jobRequiredExperience: {
        experienceMentioned: data.job_required_experience.experience_mentioned,
        experiencePreferred: data.job_required_experience.experience_preferred,
        noExperienceRequired:
          data.job_required_experience.no_experience_required,
        requiredExperienceInMonths:
          data.job_required_experience.required_experience_in_months,
      },
      jobRequiredSkills: data.job_required_skills,
      jobSalaryCurrency: data.job_salary_currency,
      jobSalaryPeriod: data.job_salary_period,
      jobState: data.job_state,
      jobTitle: data.job_state,
    }));
  }

  static toGetJob(
    job: JobDetailsApiContractResponse,
  ): GetJobByIdServiceContractResponse {
    const data = job.data[0];
    return {
      employerCompanyType: data.employer_company_type,
      employerLogo: data.employer_logo,
      employerName: data.employer_name,
      employerWebsite: data.employer_website,
      jobApplyIsDirect: data.job_apply_is_direct,
      jobApplyLink: data.job_apply_link,
      jobApplyQualityScore: data.job_apply_quality_score,
      jobBenefits: data.job_benefits,
      jobCity: data.job_city,
      jobCountry: data.job_country,
      jobDescription: data.job_description,
      jobEmploymentType: data.job_employment_type,
      jobExperienceInPlaceOfEducation:
        data.job_experience_in_place_of_education,
      jobGoogleLink: data.job_google_link,
      jobHighlights: data.job_highlights,
      jobId: data.job_id,
      jobIsRemote: data.job_is_remote,
      jobJobTitle: data.job_title,
      jobLatitude: data.job_latitude,
      jobLongitude: data.job_longitude,
      jobMaxSalary: data.job_max_salary,
      jobMinSalary: data.job_min_salary,
      jobOfferExpirationDatetimeUtc: data.job_offer_expiration_datetime_utc,
      jobOfferExpirationTimestamp: data.job_offer_expiration_timestamp,
      jobOnetJobZone: data.job_onet_job_zone,
      jobOnetSoc: data.job_onet_soc,
      jobPostedAtDatetimeUtc: data.job_posted_at_datetime_utc,
      jobPostedAtTimestamp: data.job_posted_at_timestamp,
      jobPostingLanguage: data.job_posting_language,
      jobPublisher: data.job_publisher,
      jobRequiredEducation: {
        associatesDegree: data.job_required_education.associates_degree,
        bachelorsDegree: data.job_required_education.bachelors_degree,
        degreeMentioned: data.job_required_education.degree_mentioned,
        degreePreferred: data.job_required_education.degree_preferred,
        highSchool: data.job_required_education.high_school,
        postgraduateDegree: data.job_required_education.postgraduate_degree,
        professionalCertification:
          data.job_required_education.professional_certification,
        professionalCertificationMentioned:
          data.job_required_education.professional_certification_mentioned,
      },
      jobRequiredExperience: {
        experienceMentioned: data.job_required_experience.experience_mentioned,
        experiencePreferred: data.job_required_experience.experience_preferred,
        noExperienceRequired:
          data.job_required_experience.no_experience_required,
        requiredExperienceInMonths:
          data.job_required_experience.required_experience_in_months,
      },
      jobRequiredSkills: data.job_required_skills,
      jobSalaryCurrency: data.job_salary_currency,
      jobSalaryPeriod: data.job_salary_period,
      jobState: data.job_state,
      jobTitle: data.job_state,
      jobOccupationalCategories: data?.job_occupational_categories,
      jobPublisherWebsite: data?.job_publisher_website,
      jobPublisherFavicon: data?.job_publisher_favicon,
      estimatedSalaries: data?.estimated_salaries.map((es) => ({
        jobTitle: es.job_title,
        location: es.location,
        maxSalary: es.max_salary,
        medianSalary: es.median_salary,
        minSalary: es.min_salary,
        publisherLink: es.publisher_link,
        publisherName: es.publisher_name,
        salaryCurrency: es.salary_currency,
        salaryPeriod: es.salary_period,
      })),
      applyOptions: data?.apply_options.map((ap) => ({
        applyLink: ap.apply_link,
        isDirect: ap.is_direct,
        publisher: ap.publisher,
      })),
      employerReviews: data?.employer_reviews.map((er) => er),
    };
  }
}
