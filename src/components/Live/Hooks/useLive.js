import log from 'loglevel';
import { useContext, useEffect, useState } from 'react';
import { LiveContext } from '../../../contexts/LiveContext';

export const useLive = () => {
    const [loading, setLoading] = useState(null);
    const { sessionData, refreshSessionData, sessionsList } = useContext(LiveContext);
    const [selectedStrategyId, setSelectedStrategyId] = useState(sessionsList[0]);
    
    // Function to refresh session data
    const refreshData = async (strategyId) => {
        setLoading(true);
        try {
            await refreshSessionData(strategyId);
            log.info(`Live data refreshed successfully for strategy ID: ${strategyId}`);
        } catch (error) {
            log.error(`Failed to refresh live session data for strategy ID: ${strategyId}: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    // Effect to load data on strategy selection change
    useEffect(() => {
        if (selectedStrategyId) {
            refreshData(selectedStrategyId);
        }
    }, [selectedStrategyId]);

    // Handler for manual data refresh
    const handleRefreshClick = () => {
        if (selectedStrategyId) {
            refreshData(selectedStrategyId);
        }
    };

    return {
        loading,
        sessionData,
        handleRefreshClick,
        setSelectedStrategyId,
        selectedStrategyId, 
        sessionsList,
    };
};
