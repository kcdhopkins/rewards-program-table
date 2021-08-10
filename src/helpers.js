import _ from "lodash"
import moment from "moment"

const createDateSet = (transaction, point1Total, point2Total)=>{
    return ({
        ...transaction,
        point1Total,
        point2Total,
        rewardPointsTotal: point1Total + point2Total
    })
}
const afterThreeMonths = (dateCreated)=>{
    const receiptDate = moment(dateCreated)
    const threeMonthsAgo = moment().subtract(3, 'months')
    return receiptDate.isAfter(threeMonthsAgo)
}

export const rewardsPointsCalulated =(transactionData)=>{
    const mappedUserData = transactionData.map((transaction)=>{
        const { transactionAmount, dateCreated } = transaction
        const isAfterThreeMonths = afterThreeMonths(dateCreated)
        if(isAfterThreeMonths){
            const parsedAmount = parseInt(transactionAmount)
            const point1Total = parsedAmount <= 50 ? 0 : (parsedAmount > 50 && parsedAmount < 100) ? parsedAmount - 50 : 50
            const point2Total = parsedAmount >= 100 && parsedAmount ? (parsedAmount - 100) * 2 : 0
            return createDateSet(transaction, point1Total, point2Total)
        } else {
            return {}
        }
  })
  
  return mappedUserData.filter( userData => !_.isEmpty(userData) )
}