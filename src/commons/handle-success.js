import {notification} from 'antd';
// import {getCurrentLocal} from '@/i18n';

export default function handleSuccess({successTip}) {
    const ajaxTip =  {};
    successTip && notification.success({
        message: ajaxTip.success || '成功',
        description: successTip,
    })
}
