import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import HourglassFullTwoToneIcon from '@mui/icons-material/HourglassFullTwoTone';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import JobInfo from './jobInfo';
import ApplyButton from '../shared/buttons/applyButton';
import ReferralButton from '../shared/buttons/referralButton';
import ScrollableComponent from '../shared/description/scrollableComponent';


const JobCard = ({ job }) => {
    
    const postedday = job.maxJdSalary % 30;
    
    const estimated_salary = job.minJdSalary && job.maxJdSalary 
        ? `${job.minJdSalary}k - ${job.maxJdSalary}k ${job.salaryCurrencyCode}`
        : job.minJdSalary 
        ? `${job.minJdSalary}k ${job.salaryCurrencyCode} +`
        : job.maxJdSalary 
        ? `upto ${job.maxJdSalary}k ${job.salaryCurrencyCode}`
        : "As per industry Standards";
    
    return (
        <Card sx={{ margin: 2, boxShadow: 2, border: "1px solid #d7dbd8", borderRadius: 5 }}>  
            <CardContent>
                
                <Box sx={{ border: "2px solid #d7dbd8", borderRadius: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%', pl: 1 }} md={{ width: '40%' }}  xs={{width:'33%'}} >
                    <HourglassFullTwoToneIcon sx={{ fontSize: 13 }} />
                    <Typography sx={{ fontSize: 13 }}>Posted {postedday} days ago</Typography>
                </Box>
               
                <JobInfo companyName={job.companyName} location={job.location} jobRole={job.jobRole} imageUrl={job.logoUrl}/>
               
                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1,alignItems:"center" }}>
                    <Typography variant="body1" fontWeight={600} color="#5e615f" sx={{ backgroundColor: '#fff', fontSize: '1rem' }}>
                        Estimated Salary: {estimated_salary}
                    </Typography>
                    <VerifiedOutlinedIcon sx={{ fontSize: '1.2rem' }} />
                </Box>
               
                <Typography variant="body2" sx={{ fontWeight: "550" }}>
                    About Company:
                </Typography>
                <Typography variant="body1" sx={{ fontWeight:"800"}}>
                    About Us
                </Typography>
                
                <ScrollableComponent content={job.jobDetailsFromCompany}/>
                
                <div sx={{ marginBottom: 2 }}>
                    <Typography variant="body1" fontWeight={600} color="#5e615f" sx={{ backgroundColor: '#fff', fontSize: '0.8rem' }}>
                        Minimum Experience
                    </Typography>
                    <Typography variant="body1" color="#fffff" sx={{ backgroundColor: '#fff', fontSize: '0.8rem', marginBottom: 2 }}>
                        {job.minExp ? job.minExp + " years" : "1+years"}
                    </Typography>
                </div>
                
                <ApplyButton />
                <ReferralButton />
            </CardContent>
        </Card>
    );
};

export default JobCard;
