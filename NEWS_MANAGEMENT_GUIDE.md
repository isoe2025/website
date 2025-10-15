# News Management Guide for ISoE 2025

## How to Add New News Items

To add new news and updates to the News section, follow these steps:

### 1. Open the NewsSection Component
Navigate to: `src/components/NewsSection.tsx`

### 2. Locate the `newsItems` Array
Find the `newsItems` array (around line 17-39)

### 3. Add Your New News Item
Add a new object to the beginning of the array with this structure:

```typescript
{
  id: 'unique-id',              // Use a unique identifier (e.g., '4', '5', etc.)
  title: 'Your News Title',     // Main headline of the news
  date: 'DD Month YYYY',        // Date of the news (e.g., '20 October 2025')
  description: 'Full description of the news item...',  // Detailed description
  posterUrl: '/path/to/image.jpg',  // Optional: URL to the poster/image
  downloadUrl: '#',             // Optional: Link to downloadable file
  downloadFileName: 'File_Name.pdf',  // Optional: Name of the downloadable file
  isNew: true                   // Set to true to show \"NEW\" badge and trigger notification
}
```

### 4. Example - Adding a New News Item

```typescript
const newsItems: NewsItem[] = [
  // NEW ITEM - Add here at the top
  {
    id: '4',
    title: 'Workshop on AI and Sustainability',
    date: '20 October 2025',
    description: 'Join us for an exclusive workshop on Artificial Intelligence applications in sustainable engineering. Register now!',
    posterUrl: '/placeholder.svg',
    downloadUrl: '#',
    downloadFileName: 'Workshop_Schedule.pdf',
    isNew: true  // This will show the \"NEW\" badge and trigger notification
  },
  // Existing items below...
  {
    id: '1',
    title: 'ISoE 2025 Call for Papers',
    // ... rest of the item
  },
  // ... more items
];
```

## Understanding the \"NEW\" Badge

### When does a news item show as \"NEW\"?
- Set `isNew: true` in the news item object
- A bright \"NEW\" badge will appear on the card
- The card will have a glowing animation effect

### When is a notification shown?
- Notifications appear when the page loads
- Only if there's at least one news item with `isNew: true`
- The notification shows once per session (controlled by `hasShownNotification` state)

### Best Practices:
1. **Only mark the latest 1-2 items as new** - Don't mark all items as new
2. **Remove `isNew` after a week** - Update older items to `isNew: false` or remove the property
3. **Keep the list manageable** - Archive old news items after the event

## Managing News Images

### Adding Custom Posters:
1. Save your image to `src/assets/` folder (e.g., `workshop-poster.jpg`)
2. Import it at the top of NewsSection.tsx:
   ```typescript
   import workshopPoster from '@/assets/workshop-poster.jpg';
   ```
3. Use it in your news item:
   ```typescript
   posterUrl: workshopPoster,
   ```

### For Downloadable Files:
Place PDFs and other files in the `public/` folder and reference them:
```typescript
downloadUrl: '/downloads/Workshop_Schedule.pdf',
```

## Removing Old News
Simply delete the news item object from the `newsItems` array to remove it from display.

## Testing Your Changes
1. Save the file
2. The preview will update automatically
3. Check if the \"NEW\" badge appears correctly
4. Test the download button functionality
5. Verify the notification appears on page load

---

**Need Help?** 
- The News section automatically handles layout, responsive design, and animations
- All styling follows the design system tokens from `index.css`
