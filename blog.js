function filterItems(tag) {
            const items = document.querySelectorAll('#url-list .item');
            items.forEach(item => {
                if (tag === 'all' || item.classList.contains(tag)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        }
