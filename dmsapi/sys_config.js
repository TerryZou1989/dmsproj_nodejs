
module.exports = {
	databases:[{
		name:"BaseAnalysis",
		type: "mysql",
        host: "120.92.117.210",
        port: 3306,
        database: "BaseAnalysis",
        user: "guest",
        password: "qwer1234"
	}],
    dataapi: {
        url: "http://127.0.0.1", // For splitting subdomains, could be an array.
        port: 8086,
        key:'ihealth_datams1234',
        apis:[
        		{
        			name:"Manager",
        			url:"/SystemMS/Manager/",
        			methods:[
        				{
        					method:"getlist",
        					action:"getlist",
        					params:{
        						key:'',
        						ispage:true,
        						page:1,
        						row:20
        					},
        					result:{
        						data:[],
        						count:100,
        						success:true,
        						code:0,
        						code_sub:'manager_getlist_success',
        						message:'管理员列表获取成功',
        						description:'管理员列表获取成功',
        						timestamp: new Date().getTime().toString()
        					}
        				},
        				{
        					method:"add",
        					action:"add",
        					params:{
        						name:'',
        						password:''
        					},
        					result:{
        						data:{userid:1},//返回用户id
        						success:true,
        						code:0,
        						code_sub:'manager_add_success',
        						message:'成功',
        						description:'成功',
        						timestamp: new Date().getTime().toString()
        					}
        				},
        				{
        					method:"update",
        					action:"update",
        					params:{
        						id:'',
        						name:'',
        						password:''
        					}
        				},
        				{
        					method:"delete",
        					action:"delete",
        					params:{
        						id:''
        					}
        				}
        			]
        		},
        		{
        			name:"HttpTest",
        			url:"/HttpTest/",
        			methods:[
        				{
        					method:"GetUser",
        					action:"GetUser",
        					params:{
        						key:'',
        						ispage:true,
        						page:1,
        						row:20
        					},
        					result:{
        						data:[],
        						count:100,
        						success:true,
        						code:0,
        						code_sub:'manager_getlist_success',
        						message:'管理员列表获取成功',
        						description:'管理员列表获取成功',
        						timestamp: new Date().getTime().toString()
        					}
        				}
        			]
        		},
        ]
    }
};