interface Tool {
    name: string;
    description: string;
    categories: string[];
    url: string;
}

const tools: Tool[] = [
    // Web Design
    { name: "Figma", description: "Collaborative interface design tool", categories: ["web design", "ui design", "interface design", "prototyping", "design"], url: "https://figma.com" },
    { name: "Canva", description: "Graphic design and visual content creation", categories: ["web design", "graphic design", "design", "marketing"], url: "https://canva.com" },
    { name: "Webflow", description: "Visual web development platform", categories: ["web design", "web development", "no code", "design"], url: "https://webflow.com" },
    { name: "Adobe XD", description: "UI/UX design and prototyping tool", categories: ["web design", "ui design", "ux design", "prototyping", "design"], url: "https://adobe.com/products/xd.html" },
    { name: "Sketch", description: "Digital design toolkit for Mac", categories: ["web design", "ui design", "design"], url: "https://sketch.com" },
    
    // Industrial Design
    { name: "FreeCAD", description: "Open-source parametric 3D modeler", categories: ["industrial design", "3d modeling", "cad", "engineering"], url: "https://freecadweb.org" },
    { name: "Fusion 360", description: "Cloud-based 3D CAD/CAM/CAE tool", categories: ["industrial design", "3d modeling", "cad", "engineering"], url: "https://autodesk.com/products/fusion-360" },
    { name: "SolidWorks", description: "Professional 3D CAD design software", categories: ["industrial design", "3d modeling", "cad", "engineering"], url: "https://solidworks.com" },
    { name: "Rhino", description: "3D modeling software for design", categories: ["industrial design", "3d modeling", "design"], url: "https://rhino3d.com" },
    
    // Task Management
    { name: "Linear", description: "Issue tracking for software teams", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://linear.app" },
    { name: "Asana", description: "Work management and team collaboration", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://asana.com" },
    { name: "Trello", description: "Visual project management tool", categories: ["task management", "project management", "productivity", "kanban"], url: "https://trello.com" },
    { name: "Notion", description: "All-in-one workspace for notes and tasks", categories: ["task management", "note taking", "productivity", "collaboration", "documentation"], url: "https://notion.so" },
    { name: "ClickUp", description: "All-in-one productivity platform", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://clickup.com" },
    { name: "Monday.com", description: "Work operating system", categories: ["task management", "project management", "productivity", "collaboration"], url: "https://monday.com" },
    
    // Development
    { name: "VS Code", description: "Code editor with rich extension ecosystem", categories: ["development", "coding", "programming", "ide"], url: "https://code.visualstudio.com" },
    { name: "GitHub", description: "Code hosting and collaboration platform", categories: ["development", "coding", "version control", "collaboration"], url: "https://github.com" },
    { name: "GitLab", description: "DevOps platform with Git repository", categories: ["development", "coding", "version control", "devops"], url: "https://gitlab.com" },
    { name: "Vercel", description: "Platform for frontend deployment", categories: ["development", "deployment", "hosting", "web development"], url: "https://vercel.com" },
    
    // Communication
    { name: "Slack", description: "Team communication and collaboration", categories: ["communication", "collaboration", "messaging", "productivity"], url: "https://slack.com" },
    { name: "Discord", description: "Voice, video, and text communication", categories: ["communication", "collaboration", "messaging"], url: "https://discord.com" },
    { name: "Zoom", description: "Video conferencing platform", categories: ["communication", "video conferencing", "meetings"], url: "https://zoom.us" },
    
    // Note Taking
    { name: "Obsidian", description: "Knowledge base with markdown support", categories: ["note taking", "knowledge management", "productivity", "writing"], url: "https://obsidian.md" },
    { name: "Evernote", description: "Note-taking and organization app", categories: ["note taking", "productivity", "organization"], url: "https://evernote.com" },
    { name: "Apple Notes", description: "Native note-taking app for Apple devices", categories: ["note taking", "productivity"], url: "https://apple.com/notes" },
    
    // Analytics
    { name: "Google Analytics", description: "Web analytics service", categories: ["analytics", "web analytics", "marketing", "data"], url: "https://analytics.google.com" },
    { name: "Mixpanel", description: "Product analytics platform", categories: ["analytics", "product analytics", "data"], url: "https://mixpanel.com" },
    { name: "Amplitude", description: "Digital analytics platform", categories: ["analytics", "product analytics", "data"], url: "https://amplitude.com" },
    
    // Video Editing
    { name: "Final Cut Pro", description: "Professional video editing software", categories: ["video editing", "media production", "content creation"], url: "https://apple.com/final-cut-pro" },
    { name: "Adobe Premiere Pro", description: "Industry-standard video editing", categories: ["video editing", "media production", "content creation"], url: "https://adobe.com/products/premiere.html" },
    { name: "DaVinci Resolve", description: "Professional video editing and color grading", categories: ["video editing", "media production", "content creation", "color grading"], url: "https://blackmagicdesign.com/products/davinciresolve" },
    
    // Photo Editing
    { name: "Adobe Photoshop", description: "Professional image editing software", categories: ["photo editing", "graphic design", "image editing", "design"], url: "https://adobe.com/products/photoshop.html" },
    { name: "Lightroom", description: "Photo editing and organization", categories: ["photo editing", "photography", "image editing"], url: "https://adobe.com/products/photoshop-lightroom.html" },
    { name: "GIMP", description: "Free and open-source image editor", categories: ["photo editing", "graphic design", "image editing"], url: "https://gimp.org" },
    
    // Marketing
    { name: "Mailchimp", description: "Email marketing platform", categories: ["marketing", "email marketing", "automation"], url: "https://mailchimp.com" },
    { name: "HubSpot", description: "Inbound marketing and sales platform", categories: ["marketing", "crm", "sales", "automation"], url: "https://hubspot.com" },
    { name: "Hootsuite", description: "Social media management platform", categories: ["marketing", "social media", "content management"], url: "https://hootsuite.com" },
    
    // AI & Machine Learning
    { name: "ChatGPT", description: "AI-powered conversational assistant", categories: ["ai", "machine learning", "chatbot", "productivity", "writing"], url: "https://chat.openai.com" },
    { name: "Claude", description: "AI assistant for analysis and writing", categories: ["ai", "machine learning", "chatbot", "productivity", "writing"], url: "https://claude.ai" },
    { name: "Midjourney", description: "AI image generation platform", categories: ["ai", "image generation", "design", "art"], url: "https://midjourney.com" },
    { name: "Stable Diffusion", description: "Open-source AI image generation", categories: ["ai", "image generation", "design", "art"], url: "https://stability.ai" },
    { name: "TensorFlow", description: "Open-source machine learning framework", categories: ["ai", "machine learning", "development", "data science"], url: "https://tensorflow.org" },
    { name: "PyTorch", description: "Machine learning framework", categories: ["ai", "machine learning", "development", "data science"], url: "https://pytorch.org" },
    { name: "Hugging Face", description: "AI model hub and collaboration", categories: ["ai", "machine learning", "nlp", "data science"], url: "https://huggingface.co" },
    
    // Database Management
    { name: "MongoDB", description: "NoSQL document database", categories: ["database", "nosql", "development", "backend"], url: "https://mongodb.com" },
    { name: "PostgreSQL", description: "Advanced open-source relational database", categories: ["database", "sql", "development", "backend"], url: "https://postgresql.org" },
    { name: "MySQL", description: "Popular open-source relational database", categories: ["database", "sql", "development", "backend"], url: "https://mysql.com" },
    { name: "Redis", description: "In-memory data structure store", categories: ["database", "cache", "development", "backend"], url: "https://redis.io" },
    { name: "Supabase", description: "Open-source Firebase alternative", categories: ["database", "backend", "development", "authentication"], url: "https://supabase.com" },
    { name: "Firebase", description: "Google's app development platform", categories: ["database", "backend", "development", "authentication"], url: "https://firebase.google.com" },
    
    // Cloud Platforms
    { name: "AWS", description: "Amazon Web Services cloud platform", categories: ["cloud", "hosting", "infrastructure", "devops"], url: "https://aws.amazon.com" },
    { name: "Google Cloud", description: "Google's cloud computing services", categories: ["cloud", "hosting", "infrastructure", "devops"], url: "https://cloud.google.com" },
    { name: "Azure", description: "Microsoft's cloud platform", categories: ["cloud", "hosting", "infrastructure", "devops"], url: "https://azure.microsoft.com" },
    { name: "DigitalOcean", description: "Simple cloud infrastructure", categories: ["cloud", "hosting", "infrastructure", "development"], url: "https://digitalocean.com" },
    { name: "Netlify", description: "Platform for web projects", categories: ["cloud", "hosting", "deployment", "web development"], url: "https://netlify.com" },
    { name: "Railway", description: "Infrastructure platform", categories: ["cloud", "hosting", "deployment", "development"], url: "https://railway.app" },
    
    // Testing & QA
    { name: "Jest", description: "JavaScript testing framework", categories: ["testing", "development", "javascript", "quality assurance"], url: "https://jestjs.io" },
    { name: "Cypress", description: "End-to-end testing framework", categories: ["testing", "development", "quality assurance", "automation"], url: "https://cypress.io" },
    { name: "Selenium", description: "Browser automation tool", categories: ["testing", "automation", "quality assurance", "development"], url: "https://selenium.dev" },
    { name: "Postman", description: "API testing platform", categories: ["testing", "api", "development", "quality assurance"], url: "https://postman.com" },
    { name: "Playwright", description: "Web testing and automation", categories: ["testing", "automation", "development", "quality assurance"], url: "https://playwright.dev" },
    
    // Security & Passwords
    { name: "1Password", description: "Password manager and security", categories: ["security", "password management", "productivity", "privacy"], url: "https://1password.com" },
    { name: "Bitwarden", description: "Open-source password manager", categories: ["security", "password management", "productivity", "privacy"], url: "https://bitwarden.com" },
    { name: "LastPass", description: "Password management solution", categories: ["security", "password management", "productivity"], url: "https://lastpass.com" },
    { name: "Authy", description: "Two-factor authentication app", categories: ["security", "authentication", "privacy"], url: "https://authy.com" },
    { name: "Cloudflare", description: "Web security and performance", categories: ["security", "networking", "cdn", "infrastructure"], url: "https://cloudflare.com" },
    
    // Finance & Accounting
    { name: "QuickBooks", description: "Small business accounting software", categories: ["finance", "accounting", "business", "invoicing"], url: "https://quickbooks.intuit.com" },
    { name: "Xero", description: "Online accounting software", categories: ["finance", "accounting", "business", "invoicing"], url: "https://xero.com" },
    { name: "Wave", description: "Free accounting and invoicing", categories: ["finance", "accounting", "business", "invoicing"], url: "https://waveapps.com" },
    { name: "Stripe", description: "Payment processing platform", categories: ["finance", "payments", "development", "business"], url: "https://stripe.com" },
    { name: "PayPal", description: "Online payment system", categories: ["finance", "payments", "business"], url: "https://paypal.com" },
    
    // Writing & Content Creation
    { name: "Grammarly", description: "AI-powered writing assistant", categories: ["writing", "content creation", "productivity", "grammar"], url: "https://grammarly.com" },
    { name: "Hemingway Editor", description: "Makes writing bold and clear", categories: ["writing", "content creation", "productivity", "editing"], url: "https://hemingwayapp.com" },
    { name: "Scrivener", description: "Writing software for long documents", categories: ["writing", "content creation", "productivity", "books"], url: "https://literatureandlatte.com/scrivener" },
    { name: "Medium", description: "Online publishing platform", categories: ["writing", "content creation", "blogging", "publishing"], url: "https://medium.com" },
    { name: "Ghost", description: "Open-source publishing platform", categories: ["writing", "blogging", "content creation", "publishing"], url: "https://ghost.org" },
    { name: "Substack", description: "Newsletter publishing platform", categories: ["writing", "newsletter", "content creation", "publishing"], url: "https://substack.com" },
    
    // Learning & Education
    { name: "Coursera", description: "Online learning platform", categories: ["education", "learning", "courses", "training"], url: "https://coursera.org" },
    { name: "Udemy", description: "Online course marketplace", categories: ["education", "learning", "courses", "training"], url: "https://udemy.com" },
    { name: "Khan Academy", description: "Free educational resources", categories: ["education", "learning", "free", "training"], url: "https://khanacademy.org" },
    { name: "Duolingo", description: "Language learning app", categories: ["education", "learning", "languages", "mobile"], url: "https://duolingo.com" },
    { name: "Codecademy", description: "Interactive coding lessons", categories: ["education", "learning", "coding", "programming"], url: "https://codecademy.com" },
    { name: "freeCodeCamp", description: "Free coding education", categories: ["education", "learning", "coding", "programming", "free"], url: "https://freecodecamp.org" },
    
    // API Development & Testing
    { name: "Insomnia", description: "API design and testing tool", categories: ["api", "development", "testing", "rest"], url: "https://insomnia.rest" },
    { name: "Swagger", description: "API documentation and design", categories: ["api", "development", "documentation", "rest"], url: "https://swagger.io" },
    { name: "RapidAPI", description: "API marketplace and testing", categories: ["api", "development", "marketplace"], url: "https://rapidapi.com" },
    { name: "Apollo GraphQL", description: "GraphQL platform and tools", categories: ["api", "development", "graphql", "backend"], url: "https://apollographql.com" },
    
    // Music Production
    { name: "Ableton Live", description: "Music production and performance", categories: ["music production", "audio", "daw", "content creation"], url: "https://ableton.com" },
    { name: "FL Studio", description: "Digital audio workstation", categories: ["music production", "audio", "daw", "content creation"], url: "https://image-line.com" },
    { name: "Logic Pro", description: "Professional music production", categories: ["music production", "audio", "daw", "content creation"], url: "https://apple.com/logic-pro" },
    { name: "Pro Tools", description: "Industry-standard DAW", categories: ["music production", "audio", "daw", "content creation"], url: "https://avid.com/pro-tools" },
    { name: "Audacity", description: "Free audio editor and recorder", categories: ["music production", "audio", "editing", "free"], url: "https://audacityteam.org" },
    { name: "Spotify for Artists", description: "Manage your music on Spotify", categories: ["music production", "distribution", "analytics"], url: "https://artists.spotify.com" },
    
    // Data Science & Visualization
    { name: "Tableau", description: "Data visualization software", categories: ["data science", "visualization", "analytics", "business intelligence"], url: "https://tableau.com" },
    { name: "Power BI", description: "Business analytics service", categories: ["data science", "visualization", "analytics", "business intelligence"], url: "https://powerbi.microsoft.com" },
    { name: "Jupyter", description: "Interactive computing notebooks", categories: ["data science", "development", "python", "analytics"], url: "https://jupyter.org" },
    { name: "Databricks", description: "Unified analytics platform", categories: ["data science", "big data", "analytics", "cloud"], url: "https://databricks.com" },
    { name: "Looker", description: "Business intelligence platform", categories: ["data science", "visualization", "analytics", "business intelligence"], url: "https://looker.com" },
];

interface ToolWithCategory extends Tool {
    matchedCategory: string;
}

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
                        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" 
                           class="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover:border-indigo-200">
                            <div class="flex items-start justify-between">
                                <div class="flex-1">
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">${tool.name}</h3>
                                    <p class="text-gray-600 mb-3">${tool.description}</p>
                                    <div class="flex flex-wrap gap-2">
                                        ${tool.categories.slice(0, 3).map(cat => 
                                            `<span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">${cat}</span>`
                                        ).join('')}
                                    </div>
                                </div>
                                <svg class="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    resultsDiv.innerHTML = html;
}

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
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSearch);
} else {
    initializeSearch();
}
