import React, { useEffect, useState } from 'react'
import { transactionData } from './datasource/transactionData.js'
import { rewardsPointsCalulated } from './helpers'
import RewardsPointTable from './components/rewardsPoints/'
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  center:{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableHeader:{
    position: "absolute",
    left: "42%"
  }
})

const App = () => {

  const [rewardsPointData, setRewardsPointData] = useState([])
  const classes = useStyles()

  useEffect(()=>{
    if(!rewardsPointData?.length){
      const data = rewardsPointsCalulated(transactionData)
      setRewardsPointData(data)
    }
  }, [rewardsPointData])

  return (
    <Grid container className={classes.center}>
      <Grid item xs = {6}>
        <Paper>
          <Typography variant="h5" className={classes.tableHeader}>
            User Rewards Table
          </Typography>
          <RewardsPointTable rewardsPointData={rewardsPointData}/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default App
