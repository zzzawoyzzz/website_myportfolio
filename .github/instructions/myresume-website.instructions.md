---
applyTo: '**'
---

# Portfolio Website - AI Coding Guidelines

## Project Overview
Personal portfolio website for Witchaya Morakotsriwan (Awoy), a Data Engineer with 3 years of experience. Built with Go (Gin framework), deployed on Google App Engine, with resume hosted on Google Cloud Storage.

**Live Site**: https://awoy.me

## Technology Stack
- **Backend**: Go 1.23+ with Gin framework
- **Frontend**: HTML, CSS, Vanilla JavaScript (no frameworks)
- **Deployment**: Google App Engine
- **Storage**: Google Cloud Storage (resume hosting)
- **Styling**: Custom CSS with scroll-based animations

## Project Structure
```
website_myportfolio/
├── main.go              # Entry point (16 lines - keep minimal)
├── handlers/            # HTTP request handlers
│   ├── home_handler.go
│   └── resume_handler.go
├── routes/
│   └── routes.go       # Centralized route configuration
├── static/
│   ├── css/styles.css  # All CSS (1200+ lines)
│   └── js/script.js    # All JavaScript
├── templates/
│   └── index.html      # Single-page application
├── image/              # Static images
├── file/               # Resume PDFs for deployment
├── app.yaml           # App Engine config
├── deploy.sh          # Automated deployment
├── .env               # Environment variables (not in git)
└── readme.md
```

## Architecture Principles

### 1. Separation of Concerns
- **main.go**: Only initialize router and start server (keep under 20 lines)
- **handlers/**: Business logic and request processing
- **routes/**: Route definitions and middleware
- **NO inline handlers in main.go**

### 2. Code Organization
- One handler per file in `handlers/`
- Handler functions must be exported (PascalCase)
- Use descriptive names: `DownloadResume`, `Home`, not `Handler1`

### 3. Go Best Practices
- Use `github.com/gin-gonic/gin` for routing
- Keep dependencies minimal (currently only Gin)
- No dynamic GCS SDK - use simple HTTP for resume downloads
- Module name: `my_awoy_portfolio_2025`

## Coding Standards

### Go Code
```go
// ✅ GOOD: Exported handler, clear name, proper error handling
func DownloadResume(c *gin.Context) {
    resumeURL := "https://storage.googleapis.com/bucket/file.pdf"
    resp, err := http.Get(resumeURL)
    if err != nil {
        c.String(http.StatusInternalServerError, "Failed to download")
        return
    }
    defer resp.Body.Close()
    // ... rest of logic
}

// ❌ BAD: Inline handler in main.go
r.GET("/download", func(c *gin.Context) {
    // Don't do this!
})
```

### CSS
- All styles in `static/css/styles.css`
- Use BEM-like naming: `.resume-section`, `.resume-container`, `.resume-download-btn`
- Keep responsive design with mobile-first approach
- Animation classes: `.fade-in` (applied via JS when in viewport)
- Color scheme: Light gray background (#f4f4f4), dark headers (#333), sky blue buttons (#87CEEB)

### JavaScript
- Vanilla JS only (no jQuery, React, Vue, etc.)
- All code in `<script>` tag in `index.html`
- Use `isInViewport()` function for scroll animations
- Add `.fade-in` class when elements enter viewport

### HTML
- Single-page application in `templates/index.html`
- Semantic HTML5 tags
- Sections: `#home`, `#resume`, `#skill`, `#my_exp`, `#certificate`, `#my_achievement`, `#contact`

## Critical Rules

### ❌ NEVER DO
1. **Never add complex dependencies** (especially GCS SDK - it upgrades Go version and adds 30+ packages)
2. **Never inline handlers in main.go** - always create separate handler files
3. **Never use JavaScript frameworks** - keep vanilla JS
4. **Never modify Go version** in go.mod (currently 1.23.2)
5. **Never hardcode credentials** - use environment variables

### ✅ ALWAYS DO
1. **Always use handlers/** folder for new endpoints
2. **Always register routes in routes/routes.go**
3. **Always keep main.go minimal** (entry point only)
4. **Always use environment variables** for config (via .env)
5. **Always test locally** before deployment

## Resume Download Feature

### Current Implementation (KEEP IT SIMPLE)
```go
// handlers/resume_handler.go
func DownloadResume(c *gin.Context) {
    // Hardcoded URL - update manually when resume changes
    resumeURL := "https://storage.googleapis.com/my-resume-for-download/Witchaya_Morakotsriwan_Resume_2026.pdf"
    
    resp, err := http.Get(resumeURL)
    // ... set headers to force download
    c.Header("Content-Disposition", "attachment; filename=...")
    io.Copy(c.Writer, resp.Body)
}
```

**Why simple?**
- No GCS SDK = no version conflicts
- Easy to update = just change URL
- No authentication needed = public bucket
- Lightweight = minimal dependencies

## Deployment

### Environment Variables (.env)
```bash
ACCOUNT_ID=your-email@gmail.com
PROJECT_ID=your-gcp-project-id
RESUME_BUCKET_NAME=my-resume-for-download
```

### Deployment Flow
```bash
./deploy.sh
```
Script automatically:
1. Uploads PDF from `./file/` to GCS
2. Removes old resume files
3. Sets public permissions
4. Deploys to App Engine

### App Engine Configuration (app.yaml)
- Runtime: Match go.mod version
- Instance class: F1 or F2 (small projects)
- Auto scaling: min 0, max 5
- Static handlers for `/static` and `/image`
- Force HTTPS with `secure: always`

## Design Guidelines

### Color Scheme
- Background: `#f4f4f4` (light gray)
- Headers/Footer: `#333` (dark gray)
- Primary button: `#87CEEB` (sky blue) → `#0578c4` (hover)
- Cards: `white` with subtle shadow
- Text: `#333` (dark), `#666` (secondary), `#999` (muted)

### Typography
- Font: `Arial, sans-serif`
- Section titles: `2rem` (h2)
- Body text: `1rem`
- Line height: `1.6`

### Animations
- Fade-in on scroll: `opacity: 0` → `opacity: 1`
- Transition duration: `1s` for opacity, `0.6s` for transform
- Transform: `translateY(20px)` → `translateY(0)`
- Trigger: When element enters viewport

### Responsive Design
- Desktop: Full layout
- Tablet (≤768px): Stacked layout, smaller images
- Mobile (≤480px): Single column, optimized spacing

## Common Tasks

### Adding a New Page Section
1. Add HTML in `templates/index.html` with unique `id`
2. Style in `static/css/styles.css` following naming conventions
3. Add fade-in animation in JavaScript if needed
4. Test responsive design

### Adding a New Route
1. Create handler in `handlers/your_handler.go`
2. Add route in `routes/routes.go`
3. Test locally: `go run main.go`
4. Never touch `main.go`

### Updating Resume
1. Place new PDF in `./file/` folder
2. Update URL in `handlers/resume_handler.go` (line 12 and 33)
3. Run `./deploy.sh`

### Styling Changes
1. Edit `static/css/styles.css`
2. Use existing classes when possible
3. Follow BEM naming: `block-element-modifier`
4. Test on mobile (≤480px), tablet (≤768px), desktop

## Testing Checklist
- [ ] Run locally: `go run main.go` → visit http://localhost:8081
- [ ] Test resume download (should download, not open in browser)
- [ ] Check scroll animations on all sections
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify no console errors in browser
- [ ] Hard refresh (Cmd+Shift+R) to clear cache after CSS changes

## Performance Tips
- Static files cached (1h via app.yaml)
- Images optimized (use WebP when possible)
- Minimal JavaScript (no heavy frameworks)
- Auto-scaling to zero when idle (cost-effective)

## Security Notes
- HTTPS enforced via `secure: always` in app.yaml
- No sensitive data in code
- Environment variables in `.env` (gitignored)
- Public bucket for resume (read-only)

## When User Asks For...

### "Make it dynamic"
- **Resist complexity**: Keep hardcoded approach for simplicity
- **Explain trade-offs**: Dynamic = more dependencies, version conflicts
- **Suggest manual update**: Easy to change URL when needed

### "Add a framework"
- **Keep vanilla JS**: Current setup is fast and maintainable
- **No React/Vue**: Overkill for single-page portfolio
- **Existing animations work well**

### "Fix deployment"
- Check `.env` file exists
- Verify GCS bucket permissions
- Ensure `gcloud` is authenticated
- Test with `gcloud app deploy` manually

### "Improve structure"
- Already follows Go best practices
- Separation of concerns in place
- Don't over-engineer for small project

## Maintenance

### Regular Updates
- Update resume PDF in `./file/` as needed
- Keep experience section current in `index.html`
- Add new certificates to certificate section
- Update "Last updated" date in resume section

### Dependency Management
- Run `go mod tidy` after any Go changes
- Keep Gin framework updated (check occasionally)
- Avoid adding new dependencies unless critical

---

## Quick Reference

**Add endpoint**: handlers/ → routes/ → test
**Change style**: static/css/styles.css → hard refresh
**Update resume**: file/ → handlers/resume_handler.go → deploy.sh
**Deploy**: Place PDF in file/ → `./deploy.sh`
**Local test**: `go run main.go` → localhost:8081

**Remember**: Keep it simple, maintainable, and lightweight! 🚀
