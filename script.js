document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const content = accordionItem.querySelector('.accordion-content');
            
            const isActive = accordionItem.classList.contains('active');

            // Close all other active items
            document.querySelectorAll('.accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = '0';
                }
            });

            // Toggle the clicked item
            if (!isActive) {
                accordionItem.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                accordionItem.classList.remove('active');
                content.style.maxHeight = "0";
            }
        });
    });
});
