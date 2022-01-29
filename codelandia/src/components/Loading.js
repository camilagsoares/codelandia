import React from 'react'
import { CircularProgress } from '@mui/material'
import { LoadingContainer } from '../components/styled'

const Loading = () => {
    return(
        <LoadingContainer>
            <CircularProgress />
        </LoadingContainer>
    )
}

export default Loading