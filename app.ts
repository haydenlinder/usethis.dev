// Common/normalized features list that tools can be assigned
const NORMALIZED_FEATURES = {
    // Collaboration
    "real-time-collaboration": "Real-time collaboration",
    "team-collaboration": "Team collaboration",
    "sharing": "Sharing & permissions",
    "comments": "Comments & feedback",
    "workspaces": "Workspaces",
    
    // Integration
    "integrations": "Integrations & extensions",
    "api-access": "API access",
    "webhooks": "Webhooks",
    "plugins": "Plugins & add-ons",
    "git-integration": "Git integration",
    
    // Automation
    "automation": "Automation & workflows",
    "bots": "Bots & automation",
    "triggers": "Triggers & actions",
    "scheduled-tasks": "Scheduled tasks",
    
    // Analytics & Reporting
    "analytics": "Analytics & reporting",
    "dashboards": "Dashboards & insights",
    "custom-reports": "Custom reports",
    "data-export": "Data export",
    
    // Authentication & Security
    "sso": "SSO & authentication",
    "2fa": "Two-factor authentication",
    "access-control": "Access control & permissions",
    "encryption": "Encryption & security",
    "audit-logs": "Audit logs",
    
    // Mobile & Cross-platform
    "mobile-app": "Mobile app",
    "cross-platform": "Cross-platform sync",
    "offline-mode": "Offline mode",
    
    // Cloud & Storage
    "cloud-storage": "Cloud storage",
    "backup": "Backup & recovery",
    "version-control": "Version control",
    
    // AI & ML
    "ai-features": "AI-powered features",
    "code-completion": "Code completion & suggestions",
    "auto-generation": "Auto-generation",
    
    // Development
    "debugging": "Debugging tools",
    "testing": "Testing & QA",
    "code-review": "Code review",
    "ci-cd": "CI/CD pipeline",
    "deployment": "Deployment tools",
    
    // Design
    "templates": "Templates library",
    "components": "Components & design system",
    "prototyping": "Prototyping",
    "vector-editing": "Vector editing",
    "responsive-design": "Responsive design",
    
    // Content & Media
    "media-library": "Media library",
    "video-editing": "Video editing",
    "audio-editing": "Audio editing",
    "image-editing": "Image editing",
    
    // Communication
    "messaging": "Messaging & chat",
    "video-calls": "Video calls",
    "screen-sharing": "Screen sharing",
    "notifications": "Notifications",
    
    // Project Management
    "task-management": "Task management",
    "project-tracking": "Project tracking",
    "timeline": "Timeline & roadmap",
    "kanban": "Kanban boards",
    "gantt-charts": "Gantt charts",
    
    // Documentation
    "documentation": "Documentation",
    "wiki": "Wiki & knowledge base",
    "search": "Search functionality",
    
    // Customization
    "custom-fields": "Custom fields",
    "themes": "Themes & customization",
    "branding": "Custom branding",
    
    // Performance
    "performance": "Performance monitoring",
    "caching": "Caching",
    "cdn": "CDN & edge network",
    
    // Pricing & Business
    "free-tier": "Free tier available",
    "open-source": "Open source",
    "self-hosting": "Self-hosting option",
};

interface Tool {
    name: string;
    description: string;
    categories: string[];
    url: string;
    features: (keyof typeof NORMALIZED_FEATURES)[]; // Now these should reference NORMALIZED_FEATURES keys
}

const tools: Tool[] = [
    // Web Design
    { name: "Figma", description: "Collaborative interface design tool", categories: ["web design", "ui design", "interface design", "prototyping", "design"], url: "https://figma.com", features: ["real-time-collaboration", "vector-editing", "prototyping", "components", "plugins", "responsive-design"] },
    { name: "Canva", description: "Graphic design and visual content creation", categories: ["web design", "graphic design", "design", "marketing"], url: "https://canva.com", features: ["templates", "image-editing", "branding", "media-library", "automation", "video-editing", "ai-features"] },
    { name: "Webflow", description: "Visual web development platform", categories: ["web design", "web development", "no code", "design"], url: "https://webflow.com", features: ["vector-editing", "responsive-design", "deployment", "cloud-storage"] },
    { name: "Adobe XD", description: "UI/UX design and prototyping tool", categories: ["web design", "ui design", "ux design", "prototyping", "design"], url: "https://adobe.com/products/xd.html", features: ["prototyping", "components", "integrations"] },
    { name: "Sketch", description: "Digital design toolkit for Mac", categories: ["web design", "ui design", "design"], url: "https://sketch.com", features: ["vector-editing", "components", "plugins", "cloud-storage", "real-time-collaboration"] },
    
    // Industrial Design
    { name: "FreeCAD", description: "Open-source parametric 3D modeler", categories: ["industrial design", "3d modeling", "cad", "engineering"], url: "https://freecadweb.org", features: ["open-source", "cross-platform", "plugins"] },
    { name: "Fusion 360", description: "Cloud-based 3D CAD/CAM/CAE tool", categories: ["industrial design", "3d modeling", "cad", "engineering"], url: "https://autodesk.com/products/fusion-360", features: ["cloud-storage", "real-time-collaboration", "version-control", "ai-features"] },
    { name: "SolidWorks", description: "Professional 3D CAD design software", categories: ["industrial design", "3d modeling", "cad", "engineering"], url: "https://solidworks.com", features: ["version-control", "integrations"] },
    { name: "Rhino", description: "3D modeling software for design", categories: ["industrial design", "3d modeling", "design"], url: "https://rhino3d.com", features: ["plugins", "integrations"] },
    
    // Task Management
    { name: "Linear", description: "Issue tracking for software teams", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://linear.app", features: ["task-management", "git-integration", "project-tracking", "automation", "custom-fields", 'mobile-app'] },
    { name: "Asana", description: "Work management and team collaboration", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://asana.com", features: ["task-management", "timeline", "automation", "custom-fields", "dashboards", "mobile-app", 'git-integration'] },
    { name: "Trello", description: "Visual project management tool", categories: ["task management", "project management", "productivity", "kanban"], url: "https://trello.com", features: ["kanban", "automation", "templates", "integrations", "mobile-app"] },
    { name: "Notion", description: "All-in-one workspace for notes and tasks", categories: ["task management", "note taking", "productivity", "collaboration", "documentation"], url: "https://notion.so", features: ["documentation", "wiki", "templates", "real-time-collaboration", "api-access", "ai-features"] },
    { name: "ClickUp", description: "All-in-one productivity platform", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://clickup.com", features: ["task-management", "timeline", "dashboards", "automation", "documentation"] },
    { name: "Monday.com", description: "Work operating system", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://monday.com", features: ["automation", "integrations", "dashboards", "task-management"] },
    
    // Development
    { name: "VS Code", description: "Code editor with rich extension ecosystem", categories: ["development", "coding", "programming", "ide"], url: "https://code.visualstudio.com", features: ["code-completion", "debugging", "git-integration", "plugins", "real-time-collaboration", "ai-features"] },
    { name: "GitHub", description: "Code hosting and collaboration platform", categories: ["development", "coding", "version control", "collaboration"], url: "https://github.com", features: ["version-control", "code-review", "ci-cd", "task-management", "deployment", "ai-features", "documentation", "integrations"] },
    { name: "GitLab", description: "DevOps platform with Git repository", categories: ["development", "coding", "version control", "devops"], url: "https://gitlab.com", features: ["ci-cd", "code-review", "kanban", "version-control", "encryption"] },
    { name: "Vercel", description: "Platform for frontend deployment", categories: ["development", "deployment", "hosting", "web development"], url: "https://vercel.com", features: ["deployment", "analytics", "cdn", "performance"] },
    
    // Communication
    { name: "Slack", description: "Team communication and collaboration", categories: ["communication", "collaboration", "messaging", "productivity"], url: "https://slack.com", features: ["messaging", "integrations", "video-calls", "bots", "search", "mobile-app"] },
    { name: "Discord", description: "Voice, video, and text communication", categories: ["communication", "collaboration", "messaging"], url: "https://discord.com", features: ["messaging", "video-calls", "screen-sharing", "bots", "mobile-app"] },
    { name: "Zoom", description: "Video conferencing platform", categories: ["communication", "video conferencing", "meetings"], url: "https://zoom.us", features: ["video-calls", "screen-sharing", "cloud-storage", "ai-features", "mobile-app"] },
    
    // Note Taking
    { name: "Obsidian", description: "Knowledge base with markdown support", categories: ["note taking", "knowledge management", "productivity", "writing"], url: "https://obsidian.md", features: ["wiki", "plugins", "cloud-storage", "open-source"] },
    { name: "Evernote", description: "Note-taking and organization app", categories: ["note taking", "productivity", "organization"], url: "https://evernote.com", features: ["search", "cross-platform", "templates", "mobile-app"] },
    { name: "Apple Notes", description: "Native note-taking app for Apple devices", categories: ["note taking", "productivity"], url: "https://apple.com/notes", features: ["cloud-storage", "real-time-collaboration", "mobile-app"] },
    
    // Analytics
    { name: "Google Analytics", description: "Web analytics service", categories: ["analytics", "web analytics", "marketing", "data"], url: "https://analytics.google.com", features: ["analytics", "custom-reports", "dashboards", "integrations"] },
    { name: "Mixpanel", description: "Product analytics platform", categories: ["analytics", "product analytics", "data"], url: "https://mixpanel.com", features: ["analytics", "dashboards", "data-export"] },
    { name: "Amplitude", description: "Digital analytics platform", categories: ["analytics", "product analytics", "data"], url: "https://amplitude.com", features: ["analytics", "dashboards", "integrations"] },
    
    // Video Editing
    { name: "Final Cut Pro", description: "Professional video editing software", categories: ["video editing", "media production", "content creation"], url: "https://apple.com/final-cut-pro", features: ["video-editing", "media-library"] },
    { name: "Adobe Premiere Pro", description: "Industry-standard video editing", categories: ["video editing", "media production", "content creation"], url: "https://adobe.com/products/premiere.html", features: ["video-editing", "audio-editing", "integrations"] },
    { name: "DaVinci Resolve", description: "Professional video editing and color grading", categories: ["video editing", "media production", "content creation", "color grading"], url: "https://blackmagicdesign.com/products/davinciresolve", features: ["video-editing", "audio-editing", "real-time-collaboration", "free-tier"] },
    
    // Photo Editing
    { name: "Adobe Photoshop", description: "Professional image editing software", categories: ["photo editing", "graphic design", "image editing", "design"], url: "https://adobe.com/products/photoshop.html", features: ["image-editing", "ai-features", "integrations"] },
    { name: "Lightroom", description: "Photo editing and organization", categories: ["photo editing", "photography", "image editing"], url: "https://adobe.com/products/photoshop-lightroom.html", features: ["image-editing", "templates", "cloud-storage", "mobile-app"] },
    { name: "GIMP", description: "Free and open-source image editor", categories: ["photo editing", "graphic design", "image editing"], url: "https://gimp.org", features: ["image-editing", "plugins", "themes", "cross-platform", "open-source"] },
    
    // Marketing
    { name: "Mailchimp", description: "Email marketing platform", categories: ["marketing", "email marketing", "automation"], url: "https://mailchimp.com", features: ["automation", "templates", "analytics"] },
    { name: "HubSpot", description: "Inbound marketing and sales platform", categories: ["marketing", "crm", "sales", "automation"], url: "https://hubspot.com", features: ["automation", "analytics", "dashboards"] },
    { name: "Hootsuite", description: "Social media management platform", categories: ["marketing", "social media", "content management"], url: "https://hootsuite.com", features: ["automation", "analytics", "team-collaboration"] },
    
    // AI & Machine Learning
    { name: "ChatGPT", description: "AI-powered conversational assistant", categories: ["ai", "machine learning", "chatbot", "productivity", "writing"], url: "https://chat.openai.com", features: ["ai-features", "code-completion", "auto-generation", "api-access", "integrations"] },
    { name: "Claude", description: "AI assistant for analysis and writing", categories: ["ai", "machine learning", "chatbot", "productivity", "writing"], url: "https://claude.ai", features: ["ai-features", "code-review", "auto-generation"] },
    { name: "Midjourney", description: "AI image generation platform", categories: ["ai", "image generation", "design", "art"], url: "https://midjourney.com", features: ["ai-features", "auto-generation", "media-library"] },
    { name: "Stable Diffusion", description: "Open-source AI image generation", categories: ["ai", "image generation", "design", "art"], url: "https://stability.ai", features: ["ai-features", "auto-generation", "open-source", "api-access", "self-hosting"] },
    { name: "TensorFlow", description: "Open-source machine learning framework", categories: ["ai", "machine learning", "development", "data science"], url: "https://tensorflow.org", features: ["open-source", "api-access", "mobile-app", "deployment"] },
    { name: "PyTorch", description: "Machine learning framework", categories: ["ai", "machine learning", "development", "data science"], url: "https://pytorch.org", features: ["open-source", "deployment"] },
    { name: "Hugging Face", description: "AI model hub and collaboration", categories: ["ai", "machine learning", "nlp", "data science"], url: "https://huggingface.co", features: ["open-source", "api-access", "cloud-storage", "documentation"] },
    
    // Database Management
    { name: "MongoDB", description: "NoSQL document database", categories: ["database", "nosql", "development", "backend"], url: "https://mongodb.com", features: ["cloud-storage", "version-control"] },
    { name: "PostgreSQL", description: "Advanced open-source relational database", categories: ["database", "sql", "development", "backend"], url: "https://postgresql.org", features: ["open-source", "plugins", "search"] },
    { name: "MySQL", description: "Popular open-source relational database", categories: ["database", "sql", "development", "backend"], url: "https://mysql.com", features: ["open-source", "version-control"] },
    { name: "Redis", description: "In-memory data structure store", categories: ["database", "cache", "development", "backend"], url: "https://redis.io", features: ["open-source", "caching", "performance"] },
    { name: "Supabase", description: "Open-source Firebase alternative", categories: ["database", "backend", "development", "authentication"], url: "https://supabase.com", features: ["open-source", "sso", "cloud-storage", "webhooks", "api-access"] },
    { name: "Firebase", description: "Google's app development platform", categories: ["database", "backend", "development", "authentication"], url: "https://firebase.google.com", features: ["sso", "cloud-storage", "analytics", "mobile-app", "notifications"] },
    
    // Cloud Platforms
    { name: "AWS", description: "Amazon Web Services cloud platform", categories: ["cloud", "hosting", "infrastructure", "devops"], url: "https://aws.amazon.com", features: ["cloud-storage", "deployment", "cdn", "performance"] },
    { name: "Google Cloud", description: "Google's cloud computing services", categories: ["cloud", "hosting", "infrastructure", "devops"], url: "https://cloud.google.com", features: ["cloud-storage", "deployment", "ai-features", "performance"] },
    { name: "Azure", description: "Microsoft's cloud platform", categories: ["cloud", "hosting", "infrastructure", "devops"], url: "https://azure.microsoft.com", features: ["cloud-storage", "deployment", "ci-cd"] },
    { name: "DigitalOcean", description: "Simple cloud infrastructure", categories: ["cloud", "hosting", "infrastructure", "development"], url: "https://digitalocean.com", features: ["cloud-storage", "deployment"] },
    { name: "Netlify", description: "Platform for web projects", categories: ["cloud", "hosting", "deployment", "web development"], url: "https://netlify.com", features: ["deployment", "ci-cd", "cdn", "analytics", "integrations"] },
    { name: "Railway", description: "Infrastructure platform", categories: ["cloud", "hosting", "deployment", "development"], url: "https://railway.app", features: ["deployment", "cloud-storage", "scheduled-tasks"] },
    
    // Testing & QA
    { name: "Jest", description: "JavaScript testing framework", categories: ["testing", "development", "javascript", "quality assurance"], url: "https://jestjs.io", features: ["testing", "open-source"] },
    { name: "Cypress", description: "End-to-end testing framework", categories: ["testing", "development", "quality assurance", "automation"], url: "https://cypress.io", features: ["testing", "debugging", "video-editing"] },
    { name: "Selenium", description: "Browser automation tool", categories: ["testing", "automation", "quality assurance", "development"], url: "https://selenium.dev", features: ["testing", "automation", "cross-platform", "open-source", "mobile-app"] },
    { name: "Postman", description: "API testing platform", categories: ["testing", "api", "development", "quality assurance"], url: "https://postman.com", features: ["testing", "automation", "documentation", "team-collaboration", "workspaces"] },
    { name: "Playwright", description: "Web testing and automation", categories: ["testing", "automation", "development", "quality assurance"], url: "https://playwright.dev", features: ["testing", "automation", "cross-platform", "mobile-app", "auto-generation"] },
    
    // Security & Passwords
    { name: "1Password", description: "Password manager and security", categories: ["security", "password management", "productivity", "privacy"], url: "https://1password.com", features: ["encryption", "2fa", "sharing", "cross-platform"] },
    { name: "Bitwarden", description: "Open-source password manager", categories: ["security", "password management", "productivity", "privacy"], url: "https://bitwarden.com", features: ["encryption", "open-source", "self-hosting", "cross-platform", "plugins"] },
    { name: "LastPass", description: "Password management solution", categories: ["security", "password management", "productivity"], url: "https://lastpass.com", features: ["encryption", "dashboards"] },
    { name: "Authy", description: "Two-factor authentication app", categories: ["security", "authentication", "privacy"], url: "https://authy.com", features: ["2fa", "backup", "cross-platform", "offline-mode"] },
    { name: "Cloudflare", description: "Web security and performance", categories: ["security", "networking", "cdn", "infrastructure"], url: "https://cloudflare.com", features: ["encryption", "cdn", "performance"] },
    
    // Finance & Accounting
    { name: "QuickBooks", description: "Small business accounting software", categories: ["finance", "accounting", "business", "invoicing"], url: "https://quickbooks.intuit.com", features: ["automation", "custom-reports", "mobile-app"] },
    { name: "Xero", description: "Online accounting software", categories: ["finance", "accounting", "business", "invoicing"], url: "https://xero.com", features: ["automation", "integrations", "mobile-app"] },
    { name: "Wave", description: "Free accounting and invoicing", categories: ["finance", "accounting", "business", "invoicing"], url: "https://waveapps.com", features: ["free-tier", "automation"] },
    { name: "Stripe", description: "Payment processing platform", categories: ["finance", "payments", "development", "business"], url: "https://stripe.com", features: ["api-access", "automation", "integrations", "analytics"] },
    { name: "PayPal", description: "Online payment system", categories: ["finance", "payments", "business"], url: "https://paypal.com", features: ["mobile-app"] },
    
    // Writing & Content Creation
    { name: "Grammarly", description: "AI-powered writing assistant", categories: ["writing", "content creation", "productivity", "grammar"], url: "https://grammarly.com", features: ["ai-features", "plugins", "branding"] },
    { name: "Hemingway Editor", description: "Makes writing bold and clear", categories: ["writing", "content creation", "productivity", "editing"], url: "https://hemingwayapp.com", features: ["ai-features"] },
    { name: "Scrivener", description: "Writing software for long documents", categories: ["writing", "content creation", "productivity", "books"], url: "https://literatureandlatte.com/scrivener", features: ["templates"] },
    { name: "Medium", description: "Online publishing platform", categories: ["writing", "content creation", "blogging", "publishing"], url: "https://medium.com", features: ["analytics", "mobile-app"] },
    { name: "Ghost", description: "Open-source publishing platform", categories: ["writing", "blogging", "content creation", "publishing"], url: "https://ghost.org", features: ["open-source", "analytics", "themes"] },
    { name: "Substack", description: "Newsletter publishing platform", categories: ["writing", "newsletter", "content creation", "publishing"], url: "https://substack.com", features: ["mobile-app"] },
    
    // Learning & Education
    { name: "Coursera", description: "Online learning platform", categories: ["education", "learning", "courses", "training"], url: "https://coursera.org", features: ["mobile-app"] },
    { name: "Udemy", description: "Online course marketplace", categories: ["education", "learning", "courses", "training"], url: "https://udemy.com", features: ["mobile-app"] },
    { name: "Khan Academy", description: "Free educational resources", categories: ["education", "learning", "free", "training"], url: "https://khanacademy.org", features: ["free-tier", "mobile-app"] },
    { name: "Duolingo", description: "Language learning app", categories: ["education", "learning", "languages", "mobile"], url: "https://duolingo.com", features: ["mobile-app"] },
    { name: "Codecademy", description: "Interactive coding lessons", categories: ["education", "learning", "coding", "programming"], url: "https://codecademy.com", features: ["mobile-app"] },
    { name: "freeCodeCamp", description: "Free coding education", categories: ["education", "learning", "coding", "programming", "free"], url: "https://freecodecamp.org", features: ["free-tier", "open-source"] },
    
    // API Development & Testing
    { name: "Insomnia", description: "API design and testing tool", categories: ["api", "development", "testing", "rest"], url: "https://insomnia.rest", features: ["testing", "auto-generation", "workspaces", "plugins"] },
    { name: "Swagger", description: "API documentation and design", categories: ["api", "development", "documentation", "rest"], url: "https://swagger.io", features: ["documentation", "auto-generation", "testing"] },
    { name: "RapidAPI", description: "API marketplace and testing", categories: ["api", "development", "marketplace"], url: "https://rapidapi.com", features: ["testing", "performance", "auto-generation"] },
    { name: "Apollo GraphQL", description: "GraphQL platform and tools", categories: ["api", "development", "graphql", "backend"], url: "https://apollographql.com", features: ["performance"] },
    
    // Music Production
    { name: "Ableton Live", description: "Music production and performance", categories: ["music production", "audio", "daw", "content creation"], url: "https://ableton.com", features: ["audio-editing", "plugins"] },
    { name: "FL Studio", description: "Digital audio workstation", categories: ["music production", "audio", "daw", "content creation"], url: "https://image-line.com", features: ["audio-editing", "plugins"] },
    { name: "Logic Pro", description: "Professional music production", categories: ["music production", "audio", "daw", "content creation"], url: "https://apple.com/logic-pro", features: ["audio-editing", "media-library"] },
    { name: "Pro Tools", description: "Industry-standard DAW", categories: ["music production", "audio", "daw", "content creation"], url: "https://avid.com/pro-tools", features: ["audio-editing", "real-time-collaboration"] },
    { name: "Audacity", description: "Free audio editor and recorder", categories: ["music production", "audio", "editing", "free"], url: "https://audacityteam.org", features: ["audio-editing", "free-tier", "open-source", "plugins"] },
    { name: "Spotify for Artists", description: "Manage your music on Spotify", categories: ["music production", "distribution", "analytics"], url: "https://artists.spotify.com", features: ["analytics", "mobile-app"] },
    
    // Data Science & Visualization
    { name: "Tableau", description: "Data visualization software", categories: ["data science", "visualization", "analytics", "business intelligence"], url: "https://tableau.com", features: ["dashboards", "custom-reports", "mobile-app"] },
    { name: "Power BI", description: "Business analytics service", categories: ["data science", "visualization", "analytics", "business intelligence"], url: "https://powerbi.microsoft.com", features: ["dashboards", "ai-features", "integrations"] },
    { name: "Jupyter", description: "Interactive computing notebooks", categories: ["data science", "development", "python", "analytics"], url: "https://jupyter.org", features: ["open-source", "plugins"] },
    { name: "Databricks", description: "Unified analytics platform", categories: ["data science", "big data", "analytics", "cloud"], url: "https://databricks.com", features: ["real-time-collaboration", "performance"] },
    { name: "Looker", description: "Business intelligence platform", categories: ["data science", "visualization", "analytics", "business intelligence"], url: "https://looker.com", features: ["dashboards", "custom-reports", "api-access"] },
];

interface ToolWithCategory extends Tool {
    matchedCategory: string;
}

// State management for comparison
let comparisonTools: Tool[] = [];

function getPrimaryCategory(tool: Tool, query: string): string {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Find the best matching category
    for (const category of tool.categories) {
        if (category === normalizedQuery || category.includes(normalizedQuery)) {
            return category;
        }
    }
    
    // If no direct match, return the first category
    return tool.categories[0];
}

function searchTools(query: string): ToolWithCategory[] {
    const normalizedQuery = query.toLowerCase().trim();
    
    if (normalizedQuery === "") {
        return [];
    }
    
    const queryWords = normalizedQuery.split(/\s+/);
    
    const scoredTools = tools.map(tool => {
        let score = 0;
        
        // Check each category for matches
        for (const category of tool.categories) {
            // Exact category match
            if (category === normalizedQuery) {
                score += 100;
            }
            
            // Category contains the full query
            if (category.includes(normalizedQuery)) {
                score += 50;
            }
            
            // Check individual words
            for (const word of queryWords) {
                if (word.length > 2 && category.includes(word)) {
                    score += 10;
                }
            }
        }
        
        // Check tool name
        const normalizedName = tool.name.toLowerCase();
        if (normalizedName.includes(normalizedQuery)) {
            score += 30;
        }
        
        // Check description
        const normalizedDescription = tool.description.toLowerCase();
        if (normalizedDescription.includes(normalizedQuery)) {
            score += 20;
        }
        
        return { tool, score };
    });
    
    // Filter and sort by score
    const results = scoredTools
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.tool)
        .slice(0, 15); // Increased limit for better grouping
    
    // Add matched category to each result
    return results.map(tool => ({
        ...tool,
        matchedCategory: getPrimaryCategory(tool, query)
    }));
}

function groupResultsByCategory(results: ToolWithCategory[]): Map<string, ToolWithCategory[]> {
    const grouped = new Map<string, ToolWithCategory[]>();
    
    for (const result of results) {
        const category = result.matchedCategory;
        if (!grouped.has(category)) {
            grouped.set(category, []);
        }
        grouped.get(category)!.push(result);
    }
    
    return grouped;
}

function renderResults(results: ToolWithCategory[]): void {
    const resultsContainer = document.getElementById("resultsContainer") as HTMLDivElement;
    const resultsDiv = document.getElementById("results") as HTMLDivElement;
    const emptyState = document.getElementById("emptyState") as HTMLDivElement;
    
    if (results.length === 0) {
        resultsContainer.classList.add("hidden");
        emptyState.classList.remove("hidden");
        return;
    }
    
    resultsContainer.classList.remove("hidden");
    emptyState.classList.add("hidden");
    
    const groupedResults = groupResultsByCategory(results);
    
    let html = '';
    
    groupedResults.forEach((tools, category) => {
        html += `
            <div class="mb-8">
                <h2 class="text-lg font-semibold text-gray-700 mb-4 px-2 capitalize flex items-center">
                    <span class="w-1 h-6 bg-indigo-500 rounded mr-3"></span>
                    ${category}
                </h2>
                <div class="space-y-3">
                    ${tools.map(tool => `
                        <div class="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover:border-indigo-200">
                            <div class="flex items-start justify-between">
                                <div class="flex-1">
                                    <div class="flex items-center justify-between mb-2">
                                        <h3 class="text-xl font-semibold text-gray-800">${tool.name}</h3>
                                        <button 
                                            onclick="addToComparison('${tool.name.replace(/'/g, "\\'")}')"
                                            class="ml-4 px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                                        >
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                                            </svg>
                                            Compare
                                        </button>
                                    </div>
                                    <p class="text-gray-600 mb-3">${tool.description}</p>
                                    <div class="mb-3">
                                        <ul class="text-sm text-gray-600 space-y-1">
                                            ${tool.features.map(featureKey => 
                                                `<li class="flex items-start">
                                                    <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                                    </svg>
                                                    <span>${NORMALIZED_FEATURES[featureKey as keyof typeof NORMALIZED_FEATURES] || featureKey}</span>
                                                </li>`
                                            ).join('')}
                                        </ul>
                                    </div>
                                    <div class="flex flex-wrap gap-2">
                                        ${tool.categories.slice(0, 3).map(cat => 
                                            `<span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">${cat}</span>`
                                        ).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    resultsDiv.innerHTML = html;
}

// Comparison functions
function addToComparison(toolName: string): void {
    const tool = tools.find(t => t.name === toolName);
    if (!tool) return;
    
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    searchInput.value = "";
    searchInput.placeholder = "Search for a tool to compare"
    searchInput.focus();
    
    // Clear results
    const resultsContainer = document.getElementById("resultsContainer") as HTMLDivElement;
    const emptyState = document.getElementById("emptyState") as HTMLDivElement;
    resultsContainer.classList.add("hidden");
    emptyState.classList.remove("hidden");
    
    // Check if tool already in comparison
    if (comparisonTools.find(t => t.name === toolName)) {
        return;
    }
    
    // Add tool to comparison (max 2 tools)
    if (comparisonTools.length < 2) {
        comparisonTools.push(tool);
        renderComparison();
    }
}

function renderComparison(): void {
    const comparisonArea = document.getElementById("comparisonArea") as HTMLDivElement;
    const comparisonContent = document.getElementById("comparisonContent") as HTMLDivElement;
    
    if (comparisonTools.length === 0) {
        comparisonArea.classList.add("hidden");
        return;
    }
    
    comparisonArea.classList.remove("hidden");
    
    if (comparisonTools.length === 1) {
        // Show single tool
        const tool = comparisonTools[0];
        comparisonContent.innerHTML = `
            <div class="md:col-span-2 p-6 bg-white rounded-xl shadow-lg border-2 border-indigo-200">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-2xl font-bold text-gray-800">${tool.name}</h3>
                    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" 
                       class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                        Visit Site
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>
                <p class="text-gray-600 mb-4">${tool.description}</p>
                <div class="mb-4">
                    <h4 class="text-sm font-semibold text-gray-700 mb-2">Categories:</h4>
                    <div class="flex flex-wrap gap-2">
                        ${tool.categories.map(cat => 
                            `<span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">${cat}</span>`
                        ).join('')}
                    </div>
                </div>
                <div>
                    <h4 class="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                        ${tool.features.map(featureKey => 
                            `<li class="flex items-start">
                                <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                                <span>${NORMALIZED_FEATURES[featureKey as keyof typeof NORMALIZED_FEATURES] || featureKey}</span>
                            </li>`
                        ).join('')}
                    </ul>
                </div>
            </div>
        `;
    } else if (comparisonTools.length === 2) {
        // Show comparison of two tools
        const [tool1, tool2] = comparisonTools;
        
        // Helper function to categorize features for a tool using normalized keys
        const categorizeFeatures = (currentTool: Tool, otherTool: Tool) => {
            const common: string[] = [];
            const unique: string[] = [];
            const missing: string[] = [];
            
            // Find common and unique features (now comparing normalized keys)
            currentTool.features.forEach(featureKey => {
                if (otherTool.features.includes(featureKey)) {
                    common.push(featureKey);
                } else {
                    unique.push(featureKey);
                }
            });
            
            // Find missing features (features the other tool has but this one doesn't)
            otherTool.features.forEach(featureKey => {
                if (!currentTool.features.includes(featureKey)) {
                    missing.push(featureKey);
                }
            });
            
            return { common, unique, missing };
        };
        
        comparisonContent.innerHTML = `
            ${comparisonTools.map(tool => {
                const otherTool = tool === tool1 ? tool2 : tool1;
                const { common, unique, missing } = categorizeFeatures(tool, otherTool);
                
                return `
                <div class="p-6 bg-white rounded-xl shadow-lg border-2 border-indigo-200">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-bold text-gray-800">${tool.name}</h3>
                        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" 
                           class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
                            Visit
                        </a>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">${tool.description}</p>
                    <div class="mb-4">
                        <h4 class="text-xs font-semibold text-gray-700 mb-2">Categories:</h4>
                        <div class="flex flex-wrap gap-1.5">
                            ${tool.categories.slice(0, 4).map(cat => 
                                `<span class="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full text-xs">${cat}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="text-xs font-semibold text-gray-700 mb-2">Features:</h4>
                        <ul class="text-xs space-y-1">
                            ${common.map(featureKey => 
                                `<li class="flex items-start text-gray-500">
                                    <svg class="w-3.5 h-3.5 text-gray-400 mr-1.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>${NORMALIZED_FEATURES[featureKey as keyof typeof NORMALIZED_FEATURES] || featureKey}</span>
                                </li>`
                            ).join('')}
                            ${unique.map(featureKey => 
                                `<li class="flex items-start text-green-700">
                                    <svg class="w-3.5 h-3.5 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>${NORMALIZED_FEATURES[featureKey as keyof typeof NORMALIZED_FEATURES] || featureKey}</span>
                                </li>`
                            ).join('')}
                            ${missing.map(featureKey => 
                                `<li class="flex items-start text-red-600">
                                    <svg class="w-3.5 h-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>${NORMALIZED_FEATURES[featureKey as keyof typeof NORMALIZED_FEATURES] || featureKey}</span>
                                </li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
            `}).join('')}
        `;
    }
}

function clearComparison(): void {
    comparisonTools = [];
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    searchInput.value = "";
    searchInput.placeholder = "What do you want to do?"
    searchInput.focus();
    renderComparison();
}

// Make functions available globally
(window as any).addToComparison = addToComparison;
(window as any).clearComparison = clearComparison;

function initializeSearch(): void {
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    
    let debounceTimer: number;
    
    searchInput.addEventListener("input", (e: Event) => {
        const target = e.target as HTMLInputElement;
        const query = target.value;
        
        clearTimeout(debounceTimer);
        
        debounceTimer = window.setTimeout(() => {
            const results = searchTools(query);
            renderResults(results);
        }, 150);
    });
    
    // Focus on search input on page load
    searchInput.focus();
    
    // Initialize clear comparison button
    const clearButton = document.getElementById("clearComparison") as HTMLButtonElement;
    clearButton.addEventListener("click", clearComparison);
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSearch);
} else {
    initializeSearch();
}
