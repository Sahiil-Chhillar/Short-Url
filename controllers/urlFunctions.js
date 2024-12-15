import URL from '../models/urlModel.js';

export const handleGenerateNewShortUrl = async (req, res) => {
    const { redirectUrl } = req.body;
    const shortId = generateShortId();

    try {
        const newUrl = new URL({
            shortId,
            redirectUrl,
            visitHistory: [],
        });

        await newUrl.save();
        res.status(201).json({ shortId, redirectUrl });
    } catch (error) {
        console.error('Error generating short URL:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const handleRedirectUrl = async (req, res) => {
    const { shortId } = req.params;

    try {
        const urlDoc = await URL.findOne({ shortId });

        if (!urlDoc) {
            return res.status(404).json({ error: 'URL not found' });
        }

        urlDoc.visitHistory.push({ timestamp: Date.now() });
        await urlDoc.save();

        res.redirect(urlDoc.redirectUrl);
    } catch (error) {
        console.error('Error redirecting to original URL:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const handleGetAnalytics = async (req, res) => {
    const { shortId } = req.params;

    try {
        const urlDoc = await URL.findOne({ shortId });

        if (!urlDoc) {
            return res.status(404).json({ error: 'URL not found' });
        }

        res.json({
            shortId,
            redirectUrl: urlDoc.redirectUrl,
            visitCount: urlDoc.visitHistory.length,
            visitHistory: urlDoc.visitHistory,
        });
    } catch (error) {
        console.error('Error fetching URL analytics:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const generateShortId = () => {
    return Math.random().toString(36).substring(2, 8);
};