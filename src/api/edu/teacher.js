import request from '@/utils/request'

export default{
  getPageTeaCondition(current,size,teacherQuery){
    return request({
      url: `/service_edu/edu-teacher/pageTeaCondition/${current}/${size}`,
      method: 'post',
      data: teacherQuery
    })
  },
  deleteTeaId(id){
    return request({
      url: `/service_edu/edu-teacher/delTea/${id}`,
      method: 'delete',
    })
  }







}

