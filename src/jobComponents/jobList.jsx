import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs, setFilteredJobs } from '../features/jobSlice.js';
import JobCard from './jobCard.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container, Grid, Box } from '@mui/material';

const JobsList = ({ filters }) => {
    const { visibleJobs, isLoading, hasMore } = useSelector(state => state.jobs);
    const dispatch = useDispatch();
    const scrollRef = useRef(null);

    useEffect(() => {
        dispatch(fetchJobs({ offset: 0, ...filters }));
        dispatch(setFilteredJobs(filters));
    }, [dispatch, filters]);

    const fetchMoreJobs = () => {
        if (hasMore && !isLoading) {
            dispatch(fetchJobs({ offset: visibleJobs.length, ...filters }));
        }
    };

    return (
        <div ref={scrollRef}>
            {isLoading && visibleJobs.length === 0 ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <h4>Loading...</h4>
                </Box>
            ) : (
                <InfiniteScroll
                    dataLength={visibleJobs.length}
                    next={fetchMoreJobs}
                    hasMore={hasMore}
                    loader={<Box textAlign="center"><h4>Loading more...</h4></Box>}
                    scrollableTarget={scrollRef}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>You have seen it all</b>
                        </p>
                    }
                >
                    <Container sx={{ mt: 3, mb: 3 }}> 
                        <Grid container spacing={3}> 
                            {visibleJobs.map((job, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <JobCard job={job} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </InfiniteScroll>
            )}
        </div>
    );
};

export default JobsList;
