import { combineReducers } from 'redux';

const listInit = [
    {a:'TradeCode21',b:'工单名称0001',c:'2018-09-20 11:00:05',d:'2018-09-20 11:00:05',e:'已超时',f:'集客技术方案设计组',g:'王贝贝',type: 'A' , progress: 'A' },
    {a:'TradeCode21',b:'工单名称0001',c:'2018-09-20 11:00:05',d:'2018-09-20 11:00:05',e:'已超时',f:'集客技术方案设计组',g:'王贝贝',type: 'A' , progress: 'B' },
    {a:'TradeCode21',b:'工单名称0001',c:'2018-09-20 11:00:05',d:'2018-09-20 11:00:05',e:'已超时',f:'集客技术方案设计组',g:'王贝贝',type: 'A' , progress: 'C' },
    {a:'TradeCode21',b:'工单名称0001',c:'2018-09-20 11:00:05',d:'2018-09-20 11:00:05',e:'已超时',f:'集客技术方案设计组',g:'王贝贝',type: 'A' , progress: 'D' },
    {a:'TradeCode21',b:'工单名称0001',c:'2018-09-20 11:00:05',d:'2018-09-20 11:00:05',e:'已超时',f:'集客技术方案设计组',g:'王贝贝',type: 'A' , progress: 'E' },
    {a:'TradeCode21',b:'工单名称0001',c:'2018-09-20 11:00:05',d:'2018-09-20 11:00:05',e:'已超时',f:'集客技术方案设计组',g:'王贝贝',type: 'A' , progress: 'F' },
    {a:'TradeCode21',b:'工单名称0001',c:'2018-09-20 11:00:05',d:'2018-09-20 11:00:05',e:'已超时',f:'集客技术方案设计组',g:'王贝贝',type: 'B' , progress: 'A' },
    {a:'TradeCode21',b:'工单名称0001',c:'2018-09-20 11:00:05',d:'2018-09-20 11:00:05',e:'已超时',f:'集客技术方案设计组',g:'王贝贝',type: 'B' , progress: 'B' },
    {a:'TradeCode21',b:'工单名称0001',c:'2018-09-20 11:00:05',d:'2018-09-20 11:00:05',e:'已超时',f:'集客技术方案设计组',g:'王贝贝',type: 'C' , progress: 'D' },
    {a:'D',b:'工单名称0001',c:'2018-09-20 11:00:05',d:'2018-09-20 11:00:05',e:'已超时',f:'集客技术方案设计组',g:'王贝贝',type: 'D' , progress: 'F' },
]


function list(state = listInit , action) {
    switch(action.type) {
        case 'ADD_SURVEY': return [
            ...state, action.data
        ]
    }

    return state;

}

export default combineReducers({
    list
});