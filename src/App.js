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
    margin: "10px"
  },
  middle:{
    display: 'flex',
    justifyContent: 'center',
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
      <Grid container item xs = {6}>
        <Paper>
          <Grid item xs={12} className={classes.middle}>
            <Typography variant="h5" className={classes.tableHeader}>
              User Rewards Table
            </Typography>
          </Grid>
          <Grid item>
            <RewardsPointTable rewardsPointData={rewardsPointData}/>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default App
